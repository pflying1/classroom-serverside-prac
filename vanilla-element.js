/*
 * vanillaElement() 설명
 * @param {string} tagName
 * @param {object} props
 * @param {string, object} children
 * @returns DOM element
 */

function vanillaElement(tagName, props, children) {
  const element = document.createElement(tagName);
  for (const prop in props) {
    element[prop] = props[prop];
  }

  //props 라는 매개변수의 객체를 DOMelement 의 key로 사용하고 동시에 할당한다.
  if (typeof children === "string") {
    element.innerHTML = children;
    //children이 textNode, 즉 문자열이면, innerHTML로 할당한다.
  } else {
    element.appendChild(children);
    //children이 DOMElement, 즉 객체이면, appenChild로 할당한다.
  }
  return element;
}
/*
 *vanilaElement()함수는 "component"라는 개념을 설명하는
 *바닐라 방식의 함수이다. (간략하게 로직작성)
 *component, 컴포넌트는 어떤 작성법(syntax)이 아닌, 개발자들만의 '개념(concept)' 이다.
 */
// ---------------------------------------------------------------------------------
/*
 * reactElement() 설명
 * @param {HTMLElementString} tagName
 * @param {attribute, object} props
 * @param {textNode, object, function} children
 * @returns HTMLElement
 */

function reactElement(tagName, props, children) {
  const element = React.createElement(tagName, props, children);
  return element;
}

/*
 * reactElement() 함수를 보면, 바닐라 방식의 for문과 같은 일련의 실행로직을
 * "미리작성" 해놓은 것을 "꺼내서 사용하는 것" 이 리액트 라이브러리를 바라보는 관점이다.
 * '더 간단하게' 작성할 수 있도록 조치할 수 있을 뿐,
 * 바닐라 방식보다 더 쉽거나, 더 어렵거나 하는 대조군이 되지 않는다.
 * 오히려 작성방식이 간단하기 때문에 '외우기' 좋은 것이 로직 파악에서 단점으로 작용한다.
 */
