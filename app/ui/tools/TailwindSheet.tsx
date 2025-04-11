const tailwindCheatsheet = [
    {
      name: "Layout & Container",
      items: {
        'display: flex': 'flex',
        'display: grid': 'grid',
        'flex-direction: row': 'flex-row',
        'flex-direction: column': 'flex-col',
        'flex-wrap: wrap': 'flex-wrap',
        'justify-content: center': 'justify-center',
        'justify-content: space-between': 'justify-between',
        'align-items: center': 'items-center',
        'align-items: flex-start': 'items-start',
        'position: absolute': 'absolute',
        'position: relative': 'relative',
        'position: fixed': 'fixed',
        'position: sticky': 'sticky'
      }
    },
    {
      name: "Spacing",
      items: {
        'margin: 0': 'm-0',
        'margin: 4px': 'm-1',
        'margin: 20px': 'm-5',
        'margin-left: auto': 'ml-auto',
        'margin-top: -1%': 'mt-[-1%]',
        'padding: 0': 'p-0',
        'padding: 10px 15px': 'px-[10px] py-[15px]',
        'padding: 16px': 'p-4',
        'gap: 8px': 'gap-2'
      }
    },
    {
      name: "Typography",
      items: {
        'font-size: 12px': 'text-xs',
        'font-size: 16px': 'text-base',
        'font-size: 1.4em': 'text-[1.4em]',
        'font-size: 0.7em': 'text-[0.7em]',
        'font-weight: bold': 'font-bold',
        'font-weight: light': 'font-light',
        'text-align: center': 'text-center',
        'color: #000000': 'text-black',
        'color: rgba(211,250,13,0.958)': 'text-[rgba(211,250,13,0.958)]',
        'line-height: 1.5': 'leading-normal',
        'text-decoration: underline': 'underline'
      }
    },
    {
      name: "Colors & Backgrounds",
      items: {
        'background: #202844': 'bg-[#202844]',
        'background: white': 'bg-white',
        'background: linear-gradient(...)': 'bg-gradient-to-b from-[#2f3757] to-[#202844]',
        'background-opacity: 50%': 'bg-opacity-50',
        'color: #ffffff': 'text-white',
        'border-color: #5766a3c2': 'border-[#5766a3c2]'
      }
    },
    {
      name: "Borders & Effects",
      items: {
        'border: 1px solid': 'border',
        'border: 1px solid #5766a3c2': 'border border-[#5766a3c2]',
        'border-radius: 4px': 'rounded',
        'border-radius: 8px': 'rounded-lg',
        'border-radius: 9999px': 'rounded-full',
        'box-shadow: 0 1px 3px rgba(0,0,0,0.1)': 'shadow-sm',
        'box-shadow: 0 4px 6px rgba(0,0,0,0.1)': 'shadow-md',
        'opacity: 0.5': 'opacity-50',
        'visibility: hidden': 'invisible'
      }
    },
    {
      name: "Sizing",
      items: {
        'width: 100%': 'w-full',
        'width: 50%': 'w-1/2',
        'width: 79%': 'w-[79%]',
        'min-width: 100px': 'min-w-[100px]',
        'height: 100%': 'h-full',
        'height: 100vh': 'h-screen',
        'max-height: 90vh': 'max-h-[90vh]'
      }
    },
    {
      name: "Transforms & Transitions",
      items: {
        'transform: scale(1.05)': 'scale-105',
        'transform: rotate(45deg)': 'rotate-45',
        'transition: all 0.3s ease': 'transition-all duration-300 ease-in-out',
        'transition: opacity 0.2s': 'transition-opacity duration-200'
      }
    },
    {
      name: "Responsive",
      items: {
        '@media (min-width: 640px)': 'sm:[class]',
        '@media (min-width: 768px)': 'md:[class]',
        '@media (min-width: 1024px)': 'lg:[class]',
        '@media (max-width: 768px)': 'max-md:[class]',
        'display: none': 'hidden',
        'display: block (on mobile)': 'block sm:hidden'
      }
    },
    {
      name: "Pseudo-classes",
      items: {
        '&:hover': 'hover:[class]',
        '&:focus': 'focus:[class]',
        '&:active': 'active:[class]',
        '&:first-child': 'first:[class]',
        '&:last-child': 'last:[class]',
        '&:odd-child': 'odd:[class]'
      }
    },
    {
      name: "Custom Utilities",
      items: {
        'clip-path: polygon(...)': '[clip-path:polygon(...)]',
        'scroll-snap-type: x mandatory': 'snap-x snap-mandatory',
        'aspect-ratio: 16/9': 'aspect-video',
        'backdrop-filter: blur(4px)': 'backdrop-blur-sm'
      }
    }
  ];
  
  export const CheatsheetTable = () => {
    return (
      <div id="cheatsheetTable">
        <h2> Tailwind Sheet</h2>
        {tailwindCheatsheet.map((category) => (
          <div key={category.name} className="cheatsheet-page">
            <h1>{category.name}</h1>
            <table>
              <thead>
                <tr>
                  <th>CSS/SCSS</th>
                  <th>Tailwind Class</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(category.items).map(([css, twClass]) => (
                  <tr key={css}>
                    <td>{css}</td>
                    <td><code>{twClass}</code></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };