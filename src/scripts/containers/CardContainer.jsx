import React from 'react';
import PropTypes from 'prop-types';
import { compose, withState, withHandlers } from 'recompose';

import { CardList } from '../components';

const CardContainer = ({
    data, 
    onClickItem,
    newData,
}) => {
    const dataList = [];
    for(let i= 0; i < 2; i++)
{
    (newData.length > 0 ? newData : data).map((item, idx) => {
        item.id = item.id+i; 
        return dataList.push(item);
    });
}
console.log('dataListdataList', dataList);
    return(
        <CardList
            data={ dataList}
            onClickItem={onClickItem}
        />
  )};

CardContainer.propTypes = {
    data: PropTypes.array || PropTypes.bool,
  };

  export default(compose( 
    // withProps(({ data }) => {        
    //     const dataList = data.slice();
    //     return {
    //         dataList
    //     };
    //   }),
      withState('newData', 'setNewData', props =>  props.data),
      withHandlers({
        onClickItem: ({data, setNewData}) => (card) => {
            console.log('card', card);
            console.log('datadata', data);
            // update data for render
            setNewData(data
                .map((item, idx) => ({
                    ...item,
                    key:item.id+idx,
                    isSelected:item.id === card.id, 
                    isVisible:item.id === card.id
                })));
        },
      }),
  )(CardContainer));


