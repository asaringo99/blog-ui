import Button from "@/components/base/Button";
import { ArticleInputContainer } from "./Styles"

interface IProps {
  onClick?: () => void;
}

export const ArticleInput = ({ ...props }: IProps) => {
  const { onClick } = props;
  return (
    <ArticleInputContainer>
      <Button label="Create Article" primary="darkblue" onClick={onClick}/>
    </ArticleInputContainer>
  )
}