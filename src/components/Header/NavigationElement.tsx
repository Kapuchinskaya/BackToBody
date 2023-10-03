interface NavigationElementProps {
  navigationElementText: string;
}

const NavigationElement = ({
  navigationElementText,
}: NavigationElementProps) => {
  return (
    <li>
      <a href="#">{navigationElementText}</a>
    </li>
  );
};

export default NavigationElement;
