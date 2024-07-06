import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment, SegmentInline } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Nothig found!
            </Header>
            <SegmentInline>
                <Button as={Link} to='/activities'>
                    Return to activities page
                </Button>
            </SegmentInline>
        </Segment>
    )
}