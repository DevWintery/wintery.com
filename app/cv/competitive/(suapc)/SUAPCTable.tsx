import {
  Cell,
  Row,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Tooltip,
  Typo,
} from "@solved-ac/ui-react";
import { IconQuestionMark } from "@tabler/icons-react";
import SUAPCData from "./SUAPCData";
import SUAPCRow from "./SUAPCRow";

const SUAPCTable = () => {
  return (
    <TableContainer>
      <Table
        fullWidth
        padding="dense"
        style={{
          minWidth: 600,
        }}
      >
        <TableHead>
          <Row>
            <Cell>연도</Cell>
            <Cell>대회</Cell>
            <Cell>
              <Tooltip title="#: 순위, =: 해결한 문제 수 및 페널티">
                성적
                <Typo description>
                  <IconQuestionMark />
                </Typo>
              </Tooltip>
            </Cell>
          </Row>
        </TableHead>
        <TableBody>
          {SUAPCData.map((data, index) => (
            <SUAPCRow key={index} data={data} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SUAPCTable;
