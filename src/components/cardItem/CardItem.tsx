import { 
    Cards,
    CardPoster,
    CardDescription,
    TitleMidia,
    TextNote,
    TextStudio 
} from "./cardStyle";
import StarIcon from '@expo/vector-icons/AntDesign';

interface CardItemProps {
  title: string;
  studio: string;
  nota: string;
}

interface Props {
  data: CardItemProps;
}

export default function Card({data}: Props){
    return(
        <Cards>
        <CardPoster >
        
        </CardPoster>

        <CardDescription>
          
           <TitleMidia>{data.title}</TitleMidia>
           <TextStudio>{data.studio}</TextStudio>
           <TextNote>

            <StarIcon
              name="star" 
              size={15} 
              color='#7BF4BA'
            />
            {data.nota}

          </TextNote>
       
        </CardDescription>
       
      </Cards>
    );
}