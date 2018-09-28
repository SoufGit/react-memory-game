import React from 'react';
import { Card } from 'semantic-ui-react';
import CardItemComponent from './CardItemComponent';

const CardListComponent = ({
    data, 
    onClickItem,
}) => {
    console.log('CardListComponent', data);
  return (   
    
    <Card.Group doubling centered itemsPerRow={2} className="radius arena">
       {data.map((card, index) => (
        <CardItemComponent
          key={card.id+index}
          {...{ card, index }}
          onClickItem={ onClickItem }
        />
      ))
      } 
    </Card.Group>
  );
};

export default CardListComponent;
