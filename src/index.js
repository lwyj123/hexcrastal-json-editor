import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import 'antd/dist/antd.css';

if (process.env.NODE_ENV !== 'production') {
  window.Perf = require('react-addons-perf');
}
//import '../dist/main.css'
const jeditor = require('../package/index.js');
const mock = [
  { name: '字符串', mock: '@string' },
  { name: '自然数', mock: '@natural' },
  { name: '浮点数', mock: '@float' },
  { name: '字符', mock: '@character' },
  { name: '布尔', mock: '@boolean' },
  { name: 'url', mock: '@url' },
  { name: '域名', mock: '@domain' },
  { name: 'ip地址', mock: '@ip' },
  { name: 'id', mock: '@id' },
  { name: 'guid', mock: '@guid' },
  { name: '当前时间', mock: '@now' },
  { name: '时间戳', mock: '@timestamp' }
];

const JEditor1 = jeditor();
const JEditor2 = jeditor();
const JEditor3 = jeditor();
const JEditor4 = jeditor();

render(
  <div>
    <a target="_blank" href="https://github.com/lwyj123/hexcrystal-json-editor">
      <h1>Hexcrystal -JSON-Editor</h1>
    </a>
    <p style={{ fontSize: '16px' }}>
      A json-schema editor of high efficient and easy-to-use
    </p>
    <br />

    <br />
    <h2>Example:</h2>
    <hr />

    <JEditor1
      data={''}
      onChange={e => {
        console.log('changeValue', JSON.parse(e));
      }}
    />
    <JEditor2
      data={''}
      disabled={true}
      onChange={e => {
        console.log('changeValue', JSON.parse(e));
      }}
    />
    <JEditor3
      data={''}
      rootIsObject={true}
      onChange={e => {
        console.log('changeValue', JSON.parse(e));
      }}
    />
    <JEditor4
      data={''}
      showImportButton={true}
      onChange={e => {
        console.log('changeValue', JSON.parse(e));
      }}
    />
  </div>,
  document.getElementById('root')
);
