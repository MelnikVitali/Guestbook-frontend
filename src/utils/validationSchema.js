import * as Yup from 'yup';

const PHONE_REG_EXP = /^\+380 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/; //validate phone

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = [
    'image/jpg',
    'image/jpeg',
];

const validationSchema = Yup.object({
    name: Yup.string()
        .required('Please enter a name')
        .min(2, 'Name must be more then 1 character')
        .max(60, 'Name must be less then 60 characters'),
    email: Yup.string()
        .required('Enter your email')
        .email('Invalid email format'),
    phone: Yup.string()
        .required('Enter your phone')
        .matches(PHONE_REG_EXP, 'Phone number is not valid'),
    position: Yup.string()
        .required('Select your position'),
    photo: Yup.mixed()
        .required('Your photo is required')
        .test(
            'fileSize',
            'Photo size must not exceed 5MB',
            value => value && value.size <= FILE_SIZE
        )
        .test(
            'fileFormat',
            'Photo should be jpg/jpeg image',
            value => value && SUPPORTED_FORMATS.includes(value.type)
        )
        .test(
            'fileResolution',
            'Photo with resolution at least 70x70px',
            value => {
                if (value) {
                    return new Promise(resolve => {
                        const img = new Image();
                        img.src = window.URL.createObjectURL(value);

                        img.onload = () => {
                            URL.revokeObjectURL(img.src);

                            return resolve(img.width >= 70 && img.height >= 70);
                        };

                        img.onerror = () => {
                            return resolve(
                                new Yup.ValidationError(
                                    'Image loading error',
                                    null,
                                    'photo'
                                )
                            );
                        };
                    });
                }
            })
});

export default validationSchema;
