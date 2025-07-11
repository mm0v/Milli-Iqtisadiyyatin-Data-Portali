import 'react-phone-number-input/style.css';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import '../../src/assets/sass/phoneInput.scss'; // Import CSS for styling

const CustomPhoneInput = () => {
    const [value, setValue] = useState<string | undefined>();

    return (
        <div className="phone-input-container">
            <PhoneInput
                international
                defaultCountry="AZ"
                value={value}
                onChange={setValue}
                className="custom-phone-input"
            />
        </div>
    );
};

export default CustomPhoneInput;
