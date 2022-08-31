import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../redux/configureStore';
import Home from '../pages/home';
import Games from '../pages/details';

describe('check snapshot of pages', () => {
  test('check snapshot of home', () => {
    const games = [{game: 'game1'}, {game: 'game2'}]
    const pcGames = [{game: 'game1'}, {game: 'game2'}]
    const consoleGames = [{game: 'game1'}, {game: 'game2'}]
    const mobileGames = [{game: 'game1'}, {game: 'game2'}]
    const allGames = [{game: 'game1'}, {game: 'game2'}]
    const allDLC = [{game: 'game1'}, {game: 'game2'}]
    const allEarly = [{game: 'game1'}, {game: 'game2'}]

    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Home 
              key="games"
              games={games}
              pcGames={pcGames}
              consoleGames={consoleGames}
              mobileGames={mobileGames}
              allGames={allGames}
              allDLC={allDLC}
              allEarly={allEarly}            
            />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });  
  
  test('check snapshot of details', () => {
    const games = [
      {
      id: 1867,
      title: "Call of Duty: Warzone KF Weapon Charm Key Giveaway",
      worth: "N/A",
      thumbnail: "https://www.gamerpower.com/offers/1/630e76b5dd23c.jpg",
      image: "https://www.gamerpower.com/offers/1b/630e76b5dd23c.jpg",
      description: "Claim your free KF Weapon Charm Key for Call of Duty: Warzone and jump into the action in style!",
      instructions: "1. Download and Install the Steelseries GG software.\r\n2. Log in to the app, go to the \"Giveaway\" section and click the button to unlock your key.\r\n3. Follow the giveaway instructions to redeem your key.",
      open_giveaway_url: "https://www.gamerpower.com/open/call-of-duty-warzone-kf-weapon-charm-key-giveaway",
      published_date: "2022-08-30 22:44:37",
      type: "DLC",
      platforms: "PC",
      end_date: "N/A",
      users: 790,
      status: "Active",
      gamerpower_url: "https://www.gamerpower.com/call-of-duty-warzone-kf-weapon-charm-key-giveaway",
      open_giveaway: "https://www.gamerpower.com/open/call-of-duty-warzone-kf-weapon-charm-key-giveaway"
    },
    {
      id: 1866,
      title: "Dead by Daylight: Free 100k Bloodpoints Key",
      worth: "N/A",
      thumbnail: "https://www.gamerpower.com/offers/1/630e74876116e.jpg",
      image: "https://www.gamerpower.com/offers/1b/630e74876116e.jpg",
      description: "Claim your free 100.000 Bloodpoints key for Dead by Daylight and jump into the action! You just need to install the Steelseries GG software to claim your key!",
      instructions: "1. Download and Install the Steelseries GG software.\r\n2. Log in to the app, go to the \"Giveaway\" section and click the button to unlock your key.\r\n3. Start the game and redeem the code in-game by going to the Store, clicking \"Redeem\" and enter your code.",
      open_giveaway_url: "https://www.gamerpower.com/open/dead-by-daylight-free-100k-bloodpoints-key",
      published_date: "2022-08-30 22:35:19",
      type: "DLC",
      platforms: "PC",
      end_date: "N/A",
      users: 600,
      status: "Active",
      gamerpower_url: "https://www.gamerpower.com/dead-by-daylight-free-100k-bloodpoints-key",
      open_giveaway: "https://www.gamerpower.com/open/dead-by-daylight-free-100k-bloodpoints-key"
    },
  ]

    const component = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Games key="gamesPage" gameList={games} icon={'gameimg'} title="All Content" />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(component).toMatchSnapshot();
  });
})

