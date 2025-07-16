import { useState } from 'react';

const faqs = [
  {
    title: 'Where are these chairs assembled?',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.'
  },
  {
    title: 'How long do I have to return my chair?',
    text: 'Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.'
  },
  {
    title: 'Do you ship to countries outside the EU?',
    text: 'Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!'
  }
];

export default function App() {
  return (
    <>
      <Accordion data={faqs} />
    </>
  );
}

function Accordion({ data }) {
  const [openItem, setOpenItem] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem key={i} title={el.title} num={i + 1} openItem={openItem} setOpenItem={setOpenItem}>
          <p>{el.text}</p>
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, openItem, setOpenItem, children }) {
  const isOpen = openItem === num;

  function handleToggle() {
    if (!isOpen) {
      setOpenItem(num);
    } else {
      setOpenItem(null);
    }
  }

  return (
    <div className={`item ${isOpen ? 'open' : undefined}`} onClick={handleToggle}>
      <p className="number">{String(num).padStart(2, '0')}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
