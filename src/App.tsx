
function App() {

  return (
    <div className="pointer-events-none absolute inset-0 bg-[url(./images/pattern-lines.svg)]
        bg-center bg-cover bg-repeat"
    >
        <div className="pointer-events-none absolute inset-0 bg-[url(./images/pattern-circle.svg)]
            bg-no-repeat bg-size-(--circle-width) md:bg-size-(--circle-width-m) -left-7 -top-11
            md:-left-10 md:-top-20 lg:left-5"></div>
        <div className="pointer-events-none absolute inset-0 bg-[url(./images/pattern-squiggly-line-top.svg)]
            bg-no-repeat bg-size-(--squiggly-width) md:bg-size-(--squiggly-width-m) bg-top-right top-6 md:top"></div>
        <header>
            <img src="./images/logo-full.svg" alt="logo" className="m-auto mt-8" />
        </header>
      </div>
  )
}

export default App
