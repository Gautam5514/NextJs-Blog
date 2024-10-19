import Image from 'next/image';

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
                <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
                    <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden">
                                <Image
                                    src="/images/logo.png"
                                    alt="Profile"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-2/3 flex flex-col justify-center ">
                            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
                            <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                                Hello! I&apos;m Gautam Pandit, a software developer and tech enthusiast with experience in full-stack development. I created this blog to share my journey, tips, and tutorials on web technologies, programming languages, and projects I&apos;ve worked on. I believe continuous learning is key, and I&apos;m here to help others advance their coding skills.
                            </p>
                            <p className="text-gray-600 dark:text-gray-50 text-lg">
                                Whether you&apos;re just beginning or aiming to enhance your expertise, you&apos;ll find a variety of insights and resources here. Let&apos;s dive into the exciting world of development together!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Gautam&apos;s Journey as a Coder</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
                            From curious beginner to seasoned developer, here&apos;s how Gautam navigated the world of programming.
                        </p>
                    </div>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/images/devfest.jpg"
                                    alt="Harry as a beginner"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    Gautam’s coding journey began in high school when he discovered his first programming language—Python. What started as a simple curiosity quickly transformed into a passion, leading Gautam to dedicate countless hours to experimenting with code, building projects, and mastering software development fundamentals. Now, as a skilled developer, Gautam shares insights and knowledge with others, inspiring the next generation of tech enthusiasts.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/images/devfest.jpg"
                                    alt="Harry learning new skills"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    After mastering the basics, Gautam&apos;s thirst for knowledge grew. He began exploring more complex topics such as data structures, algorithms, and web development. Enrolling in online courses and attending coding bootcamps, Gautam quickly expanded his skill set, taking on freelance projects to apply his knowledge in real-world scenarios.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/images/devfest.jpg"
                                    alt="Harry working on a big project"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    With several years of experience under his belt, Gautam began tackling more significant challenges. From contributing to open-source projects to developing his own applications, Gautam continued to push his limits, always looking for opportunities to learn and grow. His journey wasn’t without its setbacks, but each obstacle was a stepping stone to becoming the skilled developer he is today.
                                </p>
                            </div>
                        </div>

                        {/* Uncomment this section if needed
                        <div className="flex flex-col md:flex-row-reverse items-center">
                            <div className="md:w-1/3">
                                <Image
                                    src="/images/devfest.jpg"
                                    alt="Harry mentoring others"
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                            <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                                <p className="mt-4 text-gray-600 dark:text-gray-50">
                                    Today, Harry is not only a proficient coder but also a mentor to others. He regularly contributes to the programming community by writing tutorials, giving talks, and helping new coders find their footing in the world of software development. For Harry, coding is more than just a profession—it’s a lifelong journey of learning and sharing knowledge.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
