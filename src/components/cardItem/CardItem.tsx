import { 
    Cards,
    CardPoster,
    CardDescription,
    TitleMidia,
    TextNote,
    TextStudio 
} from "./cardStyle";
import StarIcon from '@expo/vector-icons/AntDesign';


export default function Card(props: { data: { title: string; studio: string;  nota: string}; }){
    return(
        <Cards>
        <CardPoster >
        
        </CardPoster>

        <CardDescription>
          
           <TitleMidia>{props.data.title}</TitleMidia>
           <TextStudio>{props.data.studio}</TextStudio>
           <TextNote>

            <StarIcon
              name="star" 
              size={15} 
              color='#7BF4BA'
            />
            {props.data.nota}

          </TextNote>
       
        </CardDescription>
       
      </Cards>
    );
}