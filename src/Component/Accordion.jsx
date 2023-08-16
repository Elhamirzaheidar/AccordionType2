import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
const date = [
  {
    id: 1,
    title: "Accordion1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem aliquam neque deleniti! Magni nihil, saepe minus a quasi, modi quae neque molestias, minima nostrum necessitatibus? Necessitatibus natus vero error?",
  },
  {
    id: 2,
    title: "Accordion1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem aliquam neque deleniti! Magni nihil, saepe minus a quasi, modi quae neque molestias, minima nostrum necessitatibus? Necessitatibus natus vero error?",
  },
  {
    id: 3,
    title: "Accordion1",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus exercitationem aliquam neque deleniti! Magni nihil, saepe minus a quasi, modi quae neque molestias, minima nostrum necessitatibus? Necessitatibus natus vero error?",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  return (
    <div className="accordion">
      {date.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          setOpen={setOpen}
          open={open}
        />
      ))}
    </div>
  );
}

export default Accordion;

function AccordionItem({ item, setOpen, open }) {
  const isOpen = item.id === open;
  return (
    <div className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}>
      <div className="accordion-item__header" onClick={() => setOpen(item.id)}>
        {item.title}
        <ChevronDownIcon
          style={{
            width: "1.2rem",
            transition: "all 0.2s ease-out",
            rotate: isOpen ? "180deg" : "0deg",
          }}
        />
      </div>
      <div className="accordion-item__content">{item.text}</div>
    </div>
  );
}
