import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import ChatBot from './index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const steps = [
  {
    id: '1',
    message: 'What number I am thinking?',
    trigger: '2',
  },
  {
    id: '2',
    options: [
      { value: 1, label: 'Number 1', trigger: '4' },
      { value: 2, label: 'Number 2', trigger: '3' },
      { value: 3, label: 'Number 3', trigger: '3' },
    ],
    inputTrigger: '4',
  },
  {
    id: '3',
    message: 'Wrong answer, try again.',
    trigger: '2',
  },
  {
    id: '4',
    message: 'Awesome! You are a telepath!',
    end: true,
  },
  {
    id: '5',
    user: true,
    trigger: '6',
  },
  {
    id: '6',
    message: 'Loll again',
    trigger: '4',
  },
];

export default {
  render: () => {
    ReactDOM.render(
      <ThemeProvider theme={otherFontTheme}>
        <ChatBot steps={steps} />
      </ThemeProvider>,
      document.getElementById('reactChatBot')
    );
  }
};