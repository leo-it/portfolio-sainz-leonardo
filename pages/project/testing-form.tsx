import Form from '@/components/ui/form/form'
import { PortfolioLayout } from '@/components/layout'
import React from 'react'

const TestingForm = () => {
  return (
    <PortfolioLayout
        title={"testing-library / Jest"}
        pageDescription={"testing-library/jest"}
      >
        <Form/>
      </PortfolioLayout>
  )
}

export default TestingForm