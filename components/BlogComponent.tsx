import Image from 'next/image';
import React from 'react'
import Container from './Container';
import one from "../public/images/blog/1.png";
import two from "../public/images/blog/2.png";
import three from "../public/images/blog/3.png";
import four from "../public/images/blog/4.png";
import five from "../public/images/blog/5.png";
import Heading from './Heading';


const cardData = [
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        text: "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
        img: one,
        classNames: "col-span-1 row-span-1"
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        img: two,
        classNames: "col-span-1",
        text: "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus."
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas Most Satisfying Cake",
        text: "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus is sed faucibus.",
        img: three,
        classNames: "col-span-2 row-span-2"
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        text: "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
        img: four,
        classNames: "col-span-1",
    },
    {
        title: "Most Satisfying Cake decorating Cake ideas",
        text: "Quis hendrerit nibh mauris sed faucibus. Quis hendrerit nibh mauris sed faucibus.",
        img: five,
        classNames: "col-span-1",
    },
]

function BlogComponent() {
    return (
        <div className='w-full flex items-center justify-center py-24'>
            <Container>
                <Heading>
                    Our Blog
                </Heading>
                <div className='my-12'>
                    <div className='grid grid-rows-2 grid-cols-4 grid-flow-col gap-8'>

                        {cardData?.map((item, idx) => (
                            <div key={idx} className={`w-full rounded-ten overflow-hidden ${item.classNames}`}>
                                <figure className={`${idx === 2 ? "h-[26rem] " : "h-[12rem]"} relative w-full object-contain`}>
                                    <Image
                                        src={item.img}
                                        fill
                                        alt={'blog image'}
                                    />
                                </figure>
                                <figcaption className='text-black p-4 space-y-2'>
                                    <h4 className='font-normal text-base leading-tight'>
                                        {item.title}
                                    </h4>
                                    <p className='font-extralight text-xs leading-tight'>
                                        {item.text}
                                    </p>
                                </figcaption>
                            </div>
                        ))
                        }

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BlogComponent;
