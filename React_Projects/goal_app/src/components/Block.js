import './Block.css';

const Block = (props) =>{
  return (
    <div className='block'>
      {props.goals.map(goal=>(<p>{goal}</p>))}
    </div>
  );
};
export default Block;