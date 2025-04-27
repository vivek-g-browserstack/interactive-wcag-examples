import type { Config } from "tailwindcss";

const iconTokens = {
	'neutral-weak': 'var(--icon-neutral-weak)',
	'neutral-default': 'var(--icon-neutral-default)',
	'neutral-strong': 'var(--icon-neutral-strong)',
	'neutral-weakest': 'var(--icon-neutral-weakest)',
	'neutral-weaker': 'var(--icon-neutral-weaker)',
	'neutral-strongest': 'var(--icon-neutral-strongest)',
	'neutral-inverse-default': 'var(--icon-neutral-inverse-default)',
	'neutral-inverse-weaker': 'var(--icon-neutral-inverse-weaker)',
	'attention-weaker': 'var(--icon-attention-weaker)',
	'attention-weak': 'var(--icon-attention-weak)',
	'attention-default': 'var(--icon-attention-default)',
	'attention-strong': 'var(--icon-attention-strong)',
	'attention-stronger': 'var(--icon-attention-stronger)',
	'attention-strongest': 'var(--icon-attention-strongest)',
	'attention-inverse-default': 'var(--icon-attention-inverse-default)',
	'brand-weakest': 'var(--icon-brand-weakest)',
	'brand-weaker': 'var(--icon-brand-weaker)',
	'brand-weak': 'var(--icon-brand-weak)',
	'brand-default': 'var(--icon-brand-default)',
	'brand-strong': 'var(--icon-brand-strong)',
	'brand-stronger': 'var(--icon-brand-stronger)',
	'danger-weakest': 'var(--icon-danger-weakest)',
	'danger-weaker': 'var(--icon-danger-weaker)',
	'danger-weak': 'var(--icon-danger-weak)',
	'danger-default': 'var(--icon-danger-default)',
	'danger-strong': 'var(--icon-danger-strong)',
	'danger-stronger': 'var(--icon-danger-stronger)',
	'success-weakest': 'var(--icon-success-weakest)',
	'success-weaker': 'var(--icon-success-weaker)',
	'success-weak': 'var(--icon-success-weak)',
	'success-default': 'var(--icon-success-default)',
	'success-strong': 'var(--icon-success-strong)',
	'success-stronger': 'var(--icon-success-stronger)',
	'sky-400': 'var(--colors-sky-400)',
	'sky-600': 'var(--colors-sky-600)'
};

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		fontFamily: {
			'display': ['Lora', 'serif'],
		},
		backgroundColor: ({ theme }) => ({
			'surface-default': 'var(--surface-default)',
			'surface-strong': 'var(--surface-strong)',
			'neutral-default': 'var(--bg-neutral-default)',
			'neutral-strong': 'var(--bg-neutral-strong)',
			'neutral-stronger': 'var(--bg-neutral-stronger)',
			'neutral-strongest': 'var(--bg-neutral-strongest)',
			'neutral-inverse-weakest': 'var(--bg-neutral-inverse-weakest)',
			'neutral-inverse-weaker': 'var(--bg-neutral-inverse-weaker)',
			'neutral-inverse-weak': 'var(--bg-neutral-inverse-weak)',
			'neutral-inverse-default': 'var(--bg-neutral-inverse-default)',
			'neutral-default-hover': 'var(--bg-neutral-default-hover)',
			'neutral-default-disabled': 'var(--bg-neutral-default-disabled)',
			'neutral-stronger-hover': 'var(--bg-neutral-stronger-hover)',
			'neutral-stronger-disabled': 'var(--bg-neutral-stronger-disabled)',
			'neutral-strongest-hover': 'var(--bg-neutral-strongest-hover)',
			'neutral-strongest-disabled': 'var(--bg-neutral-strongest-disabled)',
			'neutral-strong-hover': 'var(--bg-neutral-strong-hover)',
			'neutral-inverse-weaker-hover': 'var(--bg-neutral-inverse-weaker-hover)',
			'attention-weakest': 'var(--bg-attention-weakest)',
			'attention-weaker': 'var(--bg-attention-weaker)',
			'attention-weak': 'var(--bg-attention-weak)',
			'attention-default': 'var(--bg-attention-default)',
			'attention-stronger': 'var(--bg-attention-stronger)',
			'attention-weaker-disabled': 'var(--bg-attention-weaker-disabled)',
			'attention-weaker-hover': 'var(--bg-attention-weaker-hover)',
			'attention-weak-disabled': 'var(--bg-attention-weak-disabled)',
			'attention-weak-hover': 'var(--bg-attention-weak-hover)',
			'attention-weakest-hover': 'var(--bg-attention-weakest-hover)',
			'brand-weakest': 'var(--bg-brand-weakest)',
			'brand-weaker': 'var(--bg-brand-weaker)',
			'brand-weak': 'var(--bg-brand-weak)',
			'brand-default': 'var(--bg-brand-default)',
			'brand-stronger': 'var(--bg-brand-stronger)',
			'brand-weaker-disabled': 'var(--bg-brand-weaker-disabled)',
			'brand-weaker-hover': 'var(--bg-brand-weaker-hover)',
			'brand-default-hover': 'var(--bg-brand-default-hover)',
			'brand-default-disabled': 'var(--bg-brand-default-disabled)',
			'brand-weakest-hover': 'var(--bg-brand-weakest-hover)',
			'danger-weakest': 'var(--bg-danger-weakest)',
			'danger-weaker': 'var(--bg-danger-weaker)',
			'danger-default': 'var(--bg-danger-default)',
			'danger-stronger': 'var(--bg-danger-stronger)',
			'danger-default-hover': 'var(--bg-danger-default-hover)',
			'danger-default-disabled': 'var(--bg-danger-default-disabled)',
			'danger-weaker-hover': 'var(--bg-danger-weaker-hover)',
			'danger-weaker-disabled': 'var(--bg-danger-weaker-disabled)',
			'danger-weakest-hover': 'var(--bg-danger-weakest-hover)',
			'success-weakest': 'var(--bg-success-weakest)',
			'success-weaker': 'var(--bg-success-weaker)',
			'success-default': 'var(--bg-success-default)',
			'success-strong': 'var(--bg-success-strong)',
			'success-stronger': 'var(--bg-success-stronger)',
			'success-weaker-hover': 'var(--bg-success-weaker-hover)',
			'success-weaker-disabled': 'var(--bg-success-weaker-disabled)',
			'success-default-hover': 'var(--bg-success-default-hover)',
			'success-default-disabled': 'var(--bg-success-default-disabled)',
			'success-weakest-hover': 'var(--bg-success-weakest-hover)',
			'success-strong-hover': 'var(--bg-success-strong-hover)',
			'success-strong-disabled': 'var(--bg-success-strong-disabled)',
			'input-default': 'var(--bg-input-default)',
			'input-default-hover': 'var(--bg-input-default-hover)',
			'input-default-disabled': 'var(--bg-input-default-disabled)',
			'raised-default': 'var(--bg-raised-default)',
			'raised-default-hover': 'var(--bg-raised-default-hover)',
			...theme('colors')
		}),
		textColor: ({ theme }) => ({
			'neutral-weakest': 'var(--text-neutral-weakest)',
			'neutral-weaker': 'var(--text-neutral-weaker)',
			'neutral-weak': 'var(--text-neutral-weak)',
			'neutral-default': 'var(--text-neutral-default)',
			'neutral-inverse-default': 'var(--text-neutral-inverse-default)',
			'neutral-inverse-weak': 'var(--text-neutral-inverse-weak)',
			'neutral-inverse-weakest': 'var(--text-neutral-inverse-weakest)',
			'attention-weaker': 'var(--text-attention-weaker)',
			'attention-weak': 'var(--text-attention-weak)',
			'attention-default': 'var(--text-attention-default)',
			'attention-strong': 'var(--text-attention-strong)',
			'attention-stronger': 'var(--text-attention-stronger)',
			'attention-inverse-default': 'var(--text-attention-inverse-default)',
			'brand-weaker': 'var(--text-brand-weaker)',
			'brand-weak': 'var(--text-brand-weak)',
			'brand-default': 'var(--text-brand-default)',
			'brand-strong': 'var(--text-brand-strong)',
			'brand-stronger': 'var(--text-brand-stronger)',
			'brand-strongest': 'var(--text-brand-strongest)',
			'danger-weaker': 'var(--text-danger-weaker)',
			'danger-weak': 'var(--text-danger-weak)',
			'danger-default': 'var(--text-danger-default)',
			'danger-strong': 'var(--text-danger-strong)',
			'danger-stronger': 'var(--text-danger-stronger)',
			'danger-strongest': 'var(--text-danger-strongest)',
			'success-weaker': 'var(--text-success-weaker)',
			'success-weak': 'var(--text-success-weak)',
			'success-default': 'var(--text-success-default)',
			'success-strong': 'var(--text-success-strong)',
			'success-stronger': 'var(--text-success-stronger)',
			'rte-code-green': 'var(--rte-code-green)',
			'rte-code-dark-green': 'var(--rte-code-dark-green)',
			'rte-code-pink': 'var(--rte-code-pink)',
			'rte-code-light-pink': 'var(--rte-code-light-pink)',
			'rte-code-slate-gray': 'var(--rte-code-slate-gray)',
			'rte-code-brown': 'var(--rte-code-brown)',
			'rte-code-orange': 'var(--rte-code-orange)',
			'rte-code-gray': 'var(--rte-code-gray)',
			'rte-code-punctuation': 'var(--rte-code-punctuation)',
			...theme('colors')
		}),
		borderColor: ({ theme }) => ({
			'neutral-weak': 'var(--border-neutral-weak)',
			'neutral-default': 'var(--border-neutral-default)',
			'neutral-strong': 'var(--border-neutral-strong)',
			'neutral-stronger': 'var(--border-neutral-stronger)',
			'neutral-strongest': 'var(--border-neutral-strongest)',
			'neutral-inverse-default': 'var(--border-neutral-inverse-default)',
			'attention-default': 'var(--border-attention-default)',
			'attention-stronger': 'var(--border-attention-stronger)',
			'brand-weaker': 'var(--border-brand-weaker)',
			'brand-weak': 'var(--border-brand-weak)',
			'brand-default': 'var(--border-brand-default)',
			'brand-strong': 'var(--border-brand-strong)',
			'brand-stronger': 'var(--border-brand-stronger)',
			'brand-strongest': 'var(--border-brand-strongest)',
			'danger-weak': 'var(--border-danger-weak)',
			'danger-default': 'var(--border-danger-default)',
			'danger-stronger': 'var(--border-danger-stronger)',
			'danger-strong': 'var(--border-danger-strong)',
			'success-default': 'var(--border-success-default)',
			'success-stronger': 'var(--border-success-stronger)',
			...theme('colors')
		}),
		outlineColor: ({ theme }) => ({
			...theme('borderColor'),
			...theme('colors')
		}),
		ringColor: ({ theme }) => ({
			...theme('borderColor'),
			...theme('colors')
		}),
		caretColor: ({ theme }) => ({
			...iconTokens,
			...theme('colors')
		}),
		ringOffsetColor: ({ theme }) => ({
			...theme('backgroundColor'),
			...theme('colors'),
			DEFAULT: 'var(--bg-neutral-default)'
		}),
		fill: ({ theme }) => ({
			...iconTokens,
			'neutral-inverse-weakest': 'var(--icon-neutral-weak)', // to be deprecated later once all speedboats are migrated
			'neutral-inverse-weak': 'var(--bg-neutral-inverse-weak)', // used only for design-stack tooltip/popover arrow
			'raised-default': 'var(--bg-raised-default)', // used only for design-stack tooltip/popover arrow
			...theme('colors')
		})
	},
	plugins: [require("tailwindcss-animate")]
} satisfies Config;
