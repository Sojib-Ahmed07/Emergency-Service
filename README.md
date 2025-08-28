Answer to the question no 1

getElementById, getElementsByClassName, and querySelector / querySelectorAll is different kinds of selectors. we can select id by getElementById, select class by getElementsByClass and select any item from overall document by querySelector/querySelectorAll


Answer to the question no 2

First we have to creat and element. Then we have to put something inside it by using InnerText or value. After that we have to select it via Id or Class and then we have to use appendChild to attach it.

Answer to the question no 3

Event bubbling means that when we click on an element, the event doesn’t just stay there. It first runs on the element we clicked, then moves up to its parent, then to the parent’s parent, and keeps going until it reaches the very top of the page (the document). So it’s like the event makes bubbles that rise from the smallest element up through all the bigger containers. This is why sometimes clicking a small button can also trigger something on the bigger box around it.

Answer to the question no 4

Event delegation is when we don’t put an event on every small element, but instead we put one event on a parent element and let it catch the events from its children using event bubbling.
its usefull because :

    we can write less code

    It’s faster and uses less memory when you have many items.

    It works even if new items are added later

Answer to the question no 5

In JavaScript, preventDefault() and stopPropagation() are two methods that control how events behave.
The preventDefault() method is used to stop the browser from performing its default action for a particular event. On the other hand, stopPropagation() stops the event from bubbling up or trickling down the DOM tree, meaning parent or ancestor elements won’t be notified of the event.
