import TimeAgo from 'react-timeago'
import frenchStrings from 'react-timeago/lib/language-strings/fr'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

const formatter = buildFormatter(frenchStrings)

const year2022 = new Date(2024, 12, 13)

function RelativeTime() {
  return (
    <TimeAgo date={year2022} />
  )
}

export default RelativeTime