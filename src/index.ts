import readlineSync from 'readline-sync'

readlineSync.promptCLLoop({
    PLACE: (arg) => {
      console.log('Arg')
    },
    LEFT: () => { console.log('Left') },
    RIGHT: () => { console.log('Right') },
    MOVE: () => { console.log('Move') },
    REPORT: () => { console.log('Report') }
  }, { caseSensitive: true })
