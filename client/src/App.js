import { Component } from 'react';
import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

import * as postService from './services/postService';


import style from './App.module.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import About from './components/About/About';
import ContactUs from './components/ContactUs/ContactUs';

// function App() {
//   return (
//     <div className={style.app}>
//       <Header />
//       <div className={style.container}>
//         <Menu />
//         <Main />
//       </div>
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPost: null,
    }
  }

  componentDidMount() {
    postService.getAll()
      .then(posts => {
        this.setState({ posts })
      })
  }

  onMenuItemClick(id) {
    this.setState({ selectedPost: id });
  }
  getPosts() {
    if (!this.state.selectedPost) {
      return this.state.posts;
    } else {
      return [this.state.posts.find(x => x.id == this.state.selectedPost)];
    }
  }
  render() {
    return (
      <div className={style.app}>
        <Header />
        <div className={style.container}>
          <Menu onMenuItemClick={this.onMenuItemClick.bind(this)}/>
          <Switch>
            {/* 3 ways of routing:  */}
           {/* child components */}
            <Route path="/" exact>
              <Main posts={this.getPosts()} />
            </Route>
            {/* component =  */}
            <Route path="/about" component={About} />
            {/* render =  - this is useful when you're rendering a function directly (not a component)*/}
            <Route path="/contact-us" render={ContactUs} />
          </Switch>
        </div>
      </div>
    )
  }
}
export default App;
