import React from 'react';
import { Card, Icon, Image, Transition } from 'semantic-ui-react';

// class CardItemComponent extends React.Component {
// 	render() {
// 		const classes = this.props.className;
// 		const turned = this.props.isSelected ? 'card flipped' : 'card';
// 		const toggleVisible = this.props.didMatch ? 'hidden' : 'visible';

// 		let style = {
// 			visibility: toggleVisible,
// 		};

// 		return (
// 			<div className='flip' id={this.props.id} onClick={this.props.handleClick.bind(this)}>
// 				<div className={turned} style={style}>
// 					<div className={`face back`}> </div>
// 					<div className={`face front ${this.props.className}`}> </div>
// 				</div>
// 			</div>
// 		);
// 	}
// }

const CardItemComponent = ({ card, index, onClickItem }) => (
        <Card
              link
      raised
      key={card.id}
      style={{ width: '300px' }}
      className='radius'
    >
    {!card.isVisible ?
    <Image 
    size='mini' 
    as="img"
    className="thumbnail arena radius"
    src='../../images/question.jpg' 
    onClick={e =>  onClickItem(card)}
    />
    :
       
    <Image
        className="thumbnail arena radius"
        centered
        circular
        bordered
        size="massive"
        as="img"
        src={card.link}
        onClick={e =>  onClickItem(card)} // check card
      />
    }
        </Card>
);

export default CardItemComponent;