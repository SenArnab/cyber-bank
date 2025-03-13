import React from 'react'

const PlaidLink = ({user, variant} : PlaidLinkProps) => {
  return (
    <>
        {variant === 'primary' ? (
            <button>
                Connect Bank
            </button>
        ): variant === 'ghost' ? (
            <button>
                Connect Bank
            </button>
        ): (
            <button>
                Connect Bank
            </button>
        )}
    </>
  )
}

export default PlaidLink