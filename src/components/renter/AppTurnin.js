import React from 'react';
import {Link} from 'react-router';
import Header from '../common/Header';
import ProfileModal from '../common/ProfileModal';
import TodoList from '../common/TodoList';
import '../../styles/application-stylesheet.css';
import '../../styles/main-stylesheet.css';



class AppTurnin extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header loggedOn/>
        <TodoList userType="renter" />
        <ProfileModal />

        <div className="app-section content-section">
            <div className="header">
                <h2>Apartment Application</h2>
            </div>
            <div className="app-body">
                <a href="https://www.nobelprize.org/nobel_prizes/economic-sciences/laureates/2011/sargent-lecture_slides.pdf" download>Download application</a>

                <div className="upload-form">
                    <form>
                        <div>
                            <label htmlFor="file">Upload Application</label>
                            <input type="file" id="file" name="file" multiple/>
                        </div>
                        <div>
                            <button className="button">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default AppTurnin;
