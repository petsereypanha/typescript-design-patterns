export abstract class DocumentProcessor {
    public processDocument(): void {
        this.openDocument()
        this.extractContent()
        this.analyzeContent()
        this.saveDocument()
    }
    protected openDocument(): void {
        console.log("Opening document")
    }
    protected abstract extractContent(): void
    protected abstract analyzeContent(): void
    protected saveDocument(): void {
        console.log("Saving processed document")
    }
}

export class PDFProcessor extends DocumentProcessor {
    protected extractContent(): void {
        console.log("Extracting content from PDF")
    }

    protected analyzeContent(): void {
        console.log("Analyzing PDF content")
    }
}

export class WordProcessor extends DocumentProcessor {
    protected extractContent(): void {
        console.log("Extracting content from Word document")
    }

    protected analyzeContent(): void {
        console.log("Analyzing Word document content")
    }
}


// class WelcomeHome extends React.Component<{name: string},{}> {
//   componentDidMount() {
//     console.log("Just loaded");
//   }
//   componentWillUnmount() {
//     console.log("Goodbye!");
//   }
//   shouldComponentUpdate() {
//     return false;
//   }
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }