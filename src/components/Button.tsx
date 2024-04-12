// // Extract the styles to a separate file

import { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { SpinnerSvg } from './SpinnerSvg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: 'primary' | 'secondary' | 'ternary'
  size?: 'l' // 's' | 'm' |
}

const getButtonStyles = (
  variant: 'primary' | 'secondary' | 'ternary',
  size: 'l', // 's' | 'm' |
) => {
  const baseStyles = {
    // s: 'h-8 py-2',
    // m: 'h-9 py-[0.62rem]',
    l: 'h-10 py-3',
  }

  const variantStyles: Record<string, Record<string, string>> = {
    primary: {
      base: 'text-neutral-0 bg-primary-700 hover:bg-primary-600 dark:bg-dark-primary-600 hover:dark:bg-dark-primary-700 dark:border-transparent',
      loadingColor: '#fff',
    },
    secondary: {
      base: 'bg-primary-100 dark:bg-dark-primary-100 border border-primary-200 dark:border-dark-primary-200 text-primary-600 dark:text-dark-primary-600 hover:bg-neutral-0 dark:hover:bg-dark-neutral-0',
      loadingColor: '#ff9965',
    },
    ternary: {
      base: 'bg-neutral-0 border border-neutral-200 text-neutral-800 hover:bg-neutral-100',
      loadingColor: '#32324D',
    },
  }

  return {
    buttonStyle: `${baseStyles[size]} ${variantStyles[variant].base} flex items-center gap-1 body-semi inline-flex items-center justify-center rounded px-4 transition-all duration-300 focus:border-2 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:ring-primary-700 focus:dark:ring-dark-primary-700 focus:dark:ring-dark-primary-700 disabled:border-neutral-200 disabled:bg-neutral-150 disabled:text-neutral-600 `,
    loadingColor: variantStyles[variant].loadingColor,
  }
}

export const Button = ({
  children,
  loading,
  variant = 'primary',
  size = 'l',
  className,
  ...props
}: ButtonProps) => {
  const { buttonStyle, loadingColor } = getButtonStyles(variant, size)

  return (
    <button
      className={twMerge(buttonStyle, className)}
      type="submit"
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <SpinnerSvg color={loadingColor} />
          <span>Carregando...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}
