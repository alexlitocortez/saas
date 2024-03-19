"use client"

import React from 'react';
import Footer from '../../components/footer';
import MaxWidthWrapper from '../../components/maxwidthwrapper';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: 'pink',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

export default function homepage() {
    return (
        <>
            <MaxWidthWrapper className='mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center'>
                <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-1'>
                    <p className='text-sm font-semibold text-gray-700'>
                        Quill is now public!
                    </p>
                </div>
                <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
                    Chat with your <span className='text-blue-600'>documents</span> in seconds.
                </h1>
                <p className='mt-5 max-w-pros text-zinc-700 sm:text-lg'>
                    Quill allows you to have conversations with any PDF document. Simply upload your file and start asking questions
                    right away.
                </p>
                <Link href='/dashboard' target='_blank'>
                    Get Started <ArrowRight className='m1-2 h-5 w-5' />
                </Link>
            </MaxWidthWrapper>
        </>
    )
}

