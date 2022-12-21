import React, { useEffect } from 'react';

const FAQ = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      })
    return (
        <div className='py-32 md:px-10 grid grid-cols-1 gap-6'>
            <h1 className="text-center text-3xl font-semibold capitalize"> frequently asked questions </h1>

            <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                <hi className="py-4  text-xl font-bold capitalize">Why We Should Learn Programming Languages? </hi>
                <p>“Programming” normally provokes different reactions, and it is true that programming is not an easy task (although programming nowadays is easier than it used to be in the past). However, learning programming does have many benefits, and in this blog entry we will review some of them. In particular, we are going to show you six reasons why you should learn programming.
                    <br />

                    1. To get money
                    <br />
                    Did you that according to several studies (check for example [1], [2] and [3]) software developer is the most in-demand job in the world? Yes, the world needs tons of programmers: for data science, application development, web development… No matter which field you like the most, there will be a job for you out there if you learn programming.
                    <br />
                    2. To become a better boss (or workmate)
                    <br />
                    You do not want to become a programmer? That’s fine! However, you will most probably need to work with programmers, or even manage them. According to my experience as a developer and business analyst, there is normally a big gap between business people and IT people. It looks like we do not understand each other, as if we speak different languages… IT people should think more in terms of business impacts and user experience (rather than just in technologies), and business people should get a better understanding of the complexity of technologies and programming. We basically need to get a better understanding of each one’s needs.
                    <br />

                    3. To satisfy your curiosity
                    <br />
                    We are surrounded by all types of devices: desktop computers, laptops, tablets, phones… and we are all the time using their programs and applications. Aren’t you curious about how these work? Would you like to get a better understanding of the devices you are working with every day?

                    Let’s be more specific. Do you know how it is possible that you can transfer money by just clicking a few buttons? Or how it is possible that you can share your picture with the rest of the world with just some clicks? If you learn programming, you will start understanding how all this magic can happen, and eventually, you will be able to create this kind of magic as well.
                    <br />
                    4. To automatize your daily tasks
                    <br />
                    Are you tired of doing repetitive tasks? Do you hate already doing the same computations every day because you could not find a proper application that does the job for you? Well, if you learn programming, you will be able to create your own (small) programs/applications to ease your daily tasks. No one better than you will know what you need, and if you can find a solution for it… great!
                    <br />
                    5. To become more methodic
                    <br />
                    Have you ever met someone that knows exactly how you feel and what you really need and want independently of what you say? Well, computers are not like that (yet). With computers, we need to be very explicit on what we need them to do: we have to specify clear instructions and we need to perfectly define the corresponding statements for them. A simple comma missing can result in a not working program… So trust me, after you learn programming, you will pay more attention to the details and you will become more precise and methodic. </p>
            </div>

            <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                <h1 className="py-4  text-xl font-bold capitalize">How is the job field?</h1>
                <p>The usual way is that a person, after graduating from college, starts as a junior developer and spends the next two-three years in the same position. After acquiring the necessary skills and performing his/her tasks in a most satisfactory manner, learning as he/she goes around receives a promotion to become a lead software developer or senior developer who is spending another 4-5 years. At this stage, he executes more challenging and complex jobs and also monitors or guide junior developers. Next, once it receives a promotion, he becomes an architect, or scrum master or product owner, etc., based on his interest and skill-set. Usually, after spending 15 -20 years in the field, the person can become vice-president or director of engineering, senior manager, or so. At this stage, they lead a large size team that builds solutions or products for an organization or industry as a whole.

                    Many engineers after acquiring sufficient knowledge of the field also start their own company and become an entrepreneur. Starts are a great way to become successful and do what one loves. These days there is great support for startups from both industry and government, and because of this, we see new and innovative companies, products and solutions in the market continuously growing.

                    The third career prospect is in academia and research. Computer science is a continuously growing field where new technology is invented every other day. Artificial intelligence, Blockchain, the internet of things etc., is the newest area of research in this domain, and there is a great scope for research-minded people and create something really path-breaking. Because of the advent of new developments and requirements, a number of engineering colleges are also growing, and hence there is always a requirement for qualified faculties.
                    <br />

                    Job Prospects and Application Areas For Career In Computer Programming
                    <br />
                    There are plenty of jobs in the computer programming area, starting from fresher’s job to all the way for mid-senior and senior-level jobs. Thousands of people are hired every year by MNC’s as well as small companies and startups. In the case of India, Bengaluru, Hyderabad, and Pune are major hubs for computer engineering job markets. In addition, most colleges across India provide campus placements in this field, and more than 80% of those students who do not get placed on campus also gets a job through offline drives within 6-8 months of graduating from college.

                    Because of the huge application of computers in almost all fields of work, the rapid growth in this field is only going to enhance further.</p>
            </div>

            <div className='md:p-6 border rounded-tl-3xl rounded-bl-3xl rounded-br-3xl border-slate-700'>
                <h1 className="py-4  text-xl font-bold capitalize">What we need to learn for web development?</h1>
                <p>The best first step to becoming a Web Developer is to start learning web development fundamentals, including an understanding of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.

                    Many aspiring Web Developers are now using coding bootcamps to fast-track the learning process. Coding bootcamps have thrived because they are short, immersive, and focused on outcomes and employment – their goal is to develop job-ready skills as efficiently as possible, making them an increasingly worthwhile investment for a would-be Web Developer. According to the job site Indeed, four out of five companies in the U.S. have hired a graduate from a coding bootcamp.

                    In fact, the practical advantages of coding bootcamps are only getting clearer over time. For one thing, the field of web development naturally attracts people from all other fields, many of them making mid-career transitions – people for whom a clear and efficient path to skills expansion is a top priority. Further, employers increasingly value skills and experience over education, placing anyone who can prove their abilities on more equal footing with Developers holding a college degree.

                    It’s important to note that Web Developers – more than most other fields – must be committed to ongoing learning to stay on top of changes in web development and programming languages, tools, and trends. This makes mid-career retraining a must whether or not it’s the line of work you started out in.</p>
            </div>

        
        </div>
    );
};

export default FAQ;