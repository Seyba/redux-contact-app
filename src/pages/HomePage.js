import { ContactForm} from '../components/ContactForm'
import { ContactList } from '../components/ContactList'

export const HomePage = () => {
    return(
        <div>
            <ContactForm />
            <ContactList/>
        </div>
    )
}