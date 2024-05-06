import React from 'react'

function Contact() {
  return (
    <>
        <div class="bg-white overflow-hidden shadow rounded-lg border">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="lg:text-4xl text-2xl flex lg:justify-start justify-center leading-6 font-medium text-gray-900">
                    Contact Information
                </h3>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl class="sm:divide-y sm:divide-gray-200">
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Secretary
                        </dt>
                        <dd class="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                            Devendra Singh
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Email address
                        </dt>
                        <dd class="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                            johndoe@example.com
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Phone number
                        </dt>
                        <dd class="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                            +91 9719334919, +91 8273408734
                        </dd>
                    </div>
                    <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt class="text-sm font-medium text-gray-500">
                            Address
                        </dt>
                        <dd class="mt-1 text-sm font-bold text-gray-900 sm:mt-0 sm:col-span-2">
                            Bani Singh International School,<br/>
                            2 KM From Iglas Bus Stand to Mathura Road, Aligarh
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </>
  )
}

export default Contact