import { PiletApi} from 'my-app';
import { MyPage } from './MyPage';
import { MyPageMenu } from './MyPageMenu';
import * as React from 'react';


const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export function setup(app: PiletApi) {
  const connect = app.createConnector(() => fetch(apiUrl).then(res => res.json()));
  app.showNotification('Hello from Piral!');
  app.registerPage('/my-page',  connect(MyPage));
  app.registerMenu(() =>
    <a href="https://docs.piral.io" target="_blank">Documentation</a>
  );
  app.registerMenu(MyPageMenu);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 1,
  });
}
