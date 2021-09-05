
import { Container, Prds, Prd, Title } from './Style'
import Flyout from './flyout'

const Samp = () => {

    return (
        <>
            <Container>
                <Prds>
                    <Prd>
                        <Title>Product1</Title>
                        <p>$1</p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description </p>
                        <Flyout>View Details</Flyout>
                    </Prd>
                    <Prd>
                        <Title>Product2</Title>
                        <p>$2</p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description Sample description </p>
                        <p>Sample description </p>
                        <Flyout>View Details</Flyout>
                    </Prd>
                </Prds>
            </Container>
        </>
    )
}

export default Samp;