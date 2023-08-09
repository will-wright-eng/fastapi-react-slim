import React, { FC, useState, FormEvent, SetStateAction, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { BACKEND_URL } from '../config';
import { useStylesData } from '../utils/style';
import { renderNavigation } from './Navigation';

export const Bot: FC = () => {
  const classes = useStylesData();
  const [inputText, setInputText] = useState('What is philosophy?');
  const [isModel, setIsModel] = useState<SetStateAction<string>>('gpt-3.5-turbo');
  const [data, setData] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(null);
  const [floatInput, setFloatInput] = useState(0.75);

  useEffect(() => {
    setIsModel('gpt-3.5-turbo');
    setIsLoading(false);
    setIsSubmit(false);
  }, []);

  async function fetchWithAuth() {
    try {
      const myHeaders = new Headers();
      const token = localStorage.getItem('token');
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json');

      const res = await fetch(`${BACKEND_URL}/bot/chat`, {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify({
              prompt: inputText,
              model: isModel,
              temperature: floatInput,
              top_p: 0.95
          }),
        });
      const resData = await res.json();
      setData(resData.message);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    setData('');
    setIsSubmit(true);
    setIsLoading(true);
    event.preventDefault();
    fetchWithAuth();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(data);
  };

  return (
    <>
      {renderNavigation()}
      <div className={classes.container}>
        <h3>OpenAI GPT 3.5 Turbo Interface</h3>
        <p>This interface sends single "ChatGPT" requests to OpenAI API, with additional controls</p>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            id="outlined-multiline-static"
            label="Enter prompt here"
            multiline
            minRows={1}
            variant="outlined"
            InputProps={{
                className: classes.form,
            }}
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                event.preventDefault();
                handleSubmit(event);
              }
            }}
          />
          <TextField
            id="float-input"
            label="Temperature [0.01 - 0.99]"
            type="number"
            InputProps={{
                className: classes.form,
                inputProps: { min: 0, step: 0.01, max: 1 },
            }}
            value={floatInput}
            onChange={(event) => setFloatInput(parseFloat(event.target.value))}
          />
            <Select
            value={isModel}
            onChange={(event) => setIsModel(event.target.value as SetStateAction<string>)}
          >
            <MenuItem value="gpt-3.5-turbo">gpt-3.5-turbo</MenuItem>
            <MenuItem value="gpt-3.5-turbo-16k">gpt-3.5-turbo-16k</MenuItem>
            <MenuItem value="gpt-4">gpt-4</MenuItem>
          </Select>  
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
        {isSubmit &&   <p>Submitted...</p>}
        {error && <p>Error: <code>{error}</code></p>}
        <br />
        <div className={classes.div_child}>
          <h3>Output</h3>
          {isLoading && isSubmit && <p>Loading...</p>}
          {!isLoading && isSubmit && (
            <div className={classes.div_child}>
              <p>{data}</p>
              <Button variant="contained" color="primary" onClick={copyToClipboard}>
                Copy to Clipboard
              </Button>
            </div>
            )}
          {!isLoading && !isSubmit && <p>Nothing yet!</p>}
        </div>
      </div>
    </>
  );
};
