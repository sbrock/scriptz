#!/bin/bash
#osmo-cli.sh - command line for osmo
#USAGE:	osmo-cli.sh l 		List all tags is osmo's day notes
#	osmo-cli.sh music	Look for the tag "#music" in day notes
#	osmo-cli		Just colorize tags in day notes
#TODO: make it color each tag differently (maybe use hashes of tag names to attrib them a color)
#TODO: make it search in Tasks too
#TODO: remove <message> and </message> from output

_JustHighlightTags() {
egrep -w --color=always "#[a-z|A-Z]*" ~/.osmo/calendar_notes.xml
}

_LookForTag() {
egrep -w --color=always "#${TAG}" ~/.osmo/calendar_notes.xml
}

_ListTags() {
egrep -oh "#[a-z]*" ~/.osmo/calendar_notes.xml |sort -u |column -n
}

_RunOsmoCli() {
TAG="$1"
if [ "$TAG" = "" ]
	then _JustHighlightTags
elif [ "$TAG" = "l" ]
	then _ListTags
else
	_LookForTag
fi
}

_RunOsmoCli $1
