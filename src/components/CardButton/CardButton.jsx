import './CardButton.css';

function CardButton({ id, children, className }) {
  const cl = 'card-button' + (className ? ' ' + className : '');
  return (
    <button className={cl} id={id}>
      {children}
    </button>
  );
}

export default CardButton;
