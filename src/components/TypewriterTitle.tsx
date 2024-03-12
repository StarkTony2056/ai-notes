'use client';
import React from 'react'
import Typewriter from 'typewriter-effect'

type Props = {}

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
    options={{
        loop: true,
    }}
    onInit={(typewriter) => {
        typewriter.typeString('🤖📝 Where AI Meets Productivity.')
        .pauseFor(2000).deleteAll()
        .typeString('🚀 Supercharged Productivity.')
        .pauseFor(2000).deleteAll()
        .typeString('🦾 Automatic Note Taking.')
        .start();
    }}
    />
  )
}

export default TypewriterTitle