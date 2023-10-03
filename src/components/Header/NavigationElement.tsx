interface NavigationElementProps {
  navigationElementText: string;
}

const NavigationElement = (props: NavigationElementProps) => {
  return (
    <li>
      <a href="#">{props.navigationElementText}</a>
    </li>
  );
};

export default NavigationElement;
