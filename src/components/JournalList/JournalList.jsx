import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList({ items }) {
  if (items.length === 0) {
    return <div>Ничего нет</div>;
  }

  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <>
      {items.sort(sortItems).map((el) => (
        <CardButton key={el.id}>
          <JournalItem
            title={el.title}
            text={el.text}
            date={el.date}
          ></JournalItem>
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;
