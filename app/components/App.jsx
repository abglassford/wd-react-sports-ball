import React from 'react';

const App = React.createClass({
  getInitialState: function () {
    return { who: '' };
  },

  handleChange: function (event) {
    const nextWho = event.target.value;
    this.setState({ who: nextWho })
  },

  render: function () {
    let team;
    let site;
    let logo;
    let styles;
    if(this.state.who === '') {
      team = `Who's your fav?`
      site = 'http://www.nfl.com/'
      logo = 'http://i.nflcdn.com/static/content/public/static/img/share/shield.jpg'
      styles = {
        backgroundColor: 'darkblue',
        color: 'white',
        textDecoration: 'none'
      }
    } else if(this.state.who === 'Denver') {
      team = 'Go Broncos!'
      site = 'http://www.denverbroncos.com/'
      logo = 'http://cliparts.co/cliparts/riL/opL/riLopLqqT.png'
      styles = {
        backgroundColor: '#9f5100',
        color: 'darkblue',
        textDecoration: 'none'
      }
    } else if(this.state.who === 'Atlanta') {
      team = 'Falcons! Woohoo!';
      site = 'http://www.atlantafalcons.com/'
      logo = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRubcL6JLDw-TdDd0yQ1s5gieVk5k29d2qxB-jTRxY8wLL1Ww59Th4bY0Bh'
      styles = {
        backgroundColor: '#cd0000'
        color: 'black',
        textDecoration: 'none'
      }
    } else {
      team = `${this.state.who}? Never heard of her...`
    }

    return <div  style={styles}>
      <h1>Enter Your Favorite City!</h1>
      <input
        onChange={this.handleChange}
        type="text"
        value={this.state.who}
        />
        <p><a style={styles}href={site}>{team}</a></p>
        <img src={logo}/>
    </div>;
  }
});


export default App;
