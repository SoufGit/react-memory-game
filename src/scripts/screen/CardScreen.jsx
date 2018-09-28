"use strict";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardContainer from '../containers/CardContainer';
import {Header} from '../components';
const BASE_URL = 'https://api.imgur.com/3/gallery/hot/viral/0.json';

class CardScreen extends Component {
    constructor(props) {
		super(props);

		this.state = {
            data:[],
        }
    }
    
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch(BASE_URL);
        if (response.status !== 200) throw Error(body.message);
        
        const body = await response.json();
        const newData = body.data
        .map(data => data.images && data.images[0])
        .filter(it => {
            if(it && (it.type === "image/jpeg" || it.type === "image/png" || it.type === "image/jpg")){
                return it;
            }
        })
        .map(item => ({
                id: item.id,
                link: item.link,
                isSelected: false,
                isVisible: false
            }));       
    
        return newData.slice(0,3); // get the 3 first
      };
  
  render() {
      const { data } = this.state;
      console.log('this.state', data);
    return (
        <div className="mb-5">
        <Header />
        <br />
        <CardContainer data={data} />
        </div>
    );
  }
}

CardScreen.propTypes = {
  fetchListAction: PropTypes.func,
};

export default CardScreen;
