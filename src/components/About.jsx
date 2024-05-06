import React from 'react'
import ImageCard from './ImageCard'

function About() {
  return (
    <>
        <div className='mt-9'>
            <div className='sm:flex sm:justify-center gap-60'>
                <ImageCard image="Principal.png" name="TRAPTI THAKUR" desg="Principal"/>
                <ImageCard image="Director.png" name="DEVENDRA SINGH" desg="Secretary"/>
            </div>
            <div className='mt-8 flex flex-col items-center'>
                <h1 className='sm:text-6xl text-4xl'>Our Vision</h1>
                <p className='text-base text-center p-4'>At <span className='font-bold'>Bani Singh International School</span>, our vision is to create a nurturing environment where every student can thrive and reach their full potential. We are committed to providing quality education that fosters academic excellence, personal growth, and a love for learning. Through innovative teaching methods and a supportive community, we aim to empower students to become responsible global citizens and leaders of tomorrow. Together, we strive to inspire curiosity, creativity, and resilience in every child, equipping them with the skills and knowledge they need to succeed in an ever-changing world.</p>
            </div>
            <div className='mt-8 p-5 '>
              <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Salient Features:</h2>
              <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 flex lg:flex-row flex-col justify-center gap-4">
                <div>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Nursery to Class 8</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Value-Based Education</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Regular Spoken English Sessions</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Experienced and Trained Teaching Staff</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Yoga, Meditation, Karate, and Various Sports</span>
                    </li>
                  </div>
                  <div>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>100% CCTV Monitored Classrooms</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Door-to-Door Transport Services Available</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Computer Lab, ICT Lab, and Robotic Classes</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Special Discount for Girls</span>
                    </li>
                    <li class="flex items-center space-x-3 rtl:space-x-reverse">
                      <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                      </svg>
                      <span>Special Discount for Orphan Children</span>
                    </li>
                </div>
              </ul>
            </div>
        </div>
    </>
  )
}

export default About