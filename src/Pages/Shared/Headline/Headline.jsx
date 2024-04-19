import { TypeAnimation } from "react-type-animation";

const Headline = ({ headline, secondHeadline }) => {
    return (
        <div>
            <h2 className="text-2xl lg:text-4xl font-bold pb-4 lg:pb-7 leading-tight h-[100px]">{headline} <span className=" bg-gradient-to-r from-[#4B6FFF] to-[#4B6FFF] text-transparent bg-clip-text">
                <TypeAnimation
                    sequence={[
                        '', // Types 'One'
                        1000, // Waits 1s
                        secondHeadline, // Deletes 'One' and types 'Two'
                        1000, // Waits 2s
                        () => {
                            console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline' }}
                />
            </span></h2>
        </div>
    );
};

export default Headline;