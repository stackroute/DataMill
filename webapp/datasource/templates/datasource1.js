< div md - no - sticky = ""
style = "background-color:lightgrey;" >
  < div class = "layout-row"
layout = "row" >
  < h4 style = "padding-left:20px;padding-top:10px;" > Data Sources < /h4> < span flex > < /span> < div layout - padding >
  < md - button class = "md-fab md-mini"
aria - label = "edit" >
  < md - icon ui - sref = "datamill.createdatasource({user:{tags:[]}})" > input < /md-icon> < /md-button> < /div> < /div> < /div> < div layout = "row"
layout - xs = "row"
layout - align = "center center" >
  < div flex = "80"
flex - xs = "100"
layout = "column" >
  < span flex - gt - sm = "5"
flex - xs = "10" > < /span> < div >
  < md - content >
  < md - list >
  < div layout - xs = "row"
layout - sm = "row"
layout - md = "row"
layout - gt - md = "row"
layout - wrap >
  < md - list - item flex - xs = "100"
flex - sm = "50"
flex - md = "33"
flex - gt - md = "25"
md - ink - ripple class = "md-3-line"
ng - repeat = "source in nameofsource | filter: '!primitive' as filtered" >
  < md - list - content layout = "row"
ui - sref = "datamill.createdatasource({user:source})"
ng - click = "abc()" >
  < ng - avatar string = "{{source.name}}"
round - shape = "true"
auto - color = "true" > < /ng-avatar> < div class = "md-list-item-text"
style = "padding-left:10px;" >
  < h3 > {
    { source.name } } < /h3> < p > {
    { source.tags[0] } } < /p> < /div> < /md-list-content> < /md-list-item> < /div>
  <!-- <md-list>
  < md - list - item ng - repeat = "source in nameofsource"
layout = "row" >
  < md - list - content ng - click = "abc()"
s >
  < ng - avatar string = "{{source.name}}"
round - shape = true auto - color = true >
  < /ng-avatar> < h4 flex = ""
flex - offset = "5" > {
  { source.name } } < /h4> < md - divider > < /md-divider> < /md-list-content>  < md - button class = "md-fab md-mini"
aria - label = "edit" >
  < md - icon ui - sref = "datamill.createdatasource({user:source})" > edit < /md-icon> < /md-button>  < /md-list-item> --> < /md-list> < /md-content> < /div> < /div> < /div>

< div md - no - sticky = ""
style = "background-color:lightgrey;" >
  < div class = "layout-row"
layout = "row" >
  < h4 style = "padding-left:20px;padding-top:10px;" > Data Sources < /h4> < span flex > < /span> < div layout - padding >
  < md - button class = "md-fab md-mini"
aria - label = "edit" >
  < md - icon ui - sref = "datamill.createdatasource({user:{tags:[]}})" > input < /md-icon> < /md-button> < /div> < /div> < /div> < div layout = "row"
layout - xs = "row"
layout - align = "center center" >
  < div flex = "80"
flex - xs = "100"
layout = "column" >
  < span flex - gt - sm = "5"
flex - xs = "10" > < /span> < div >
  < md - content >
  < md - list >
  < div layout - xs = "row"
layout - sm = "row"
layout - md = "row"
layout - gt - md = "row"
layout - wrap >
  < md - list - item flex - xs = "100"
flex - sm = "50"
flex - md = "33"
flex - gt - md = "25"
md - ink - ripple class = "md-3-line"
ng - repeat = "source in nameofsource | filter: '!primitive' as filtered" >
  < md - list - content layout = "row"
ui - sref = "datamill.createdatasource({user:source})"
ng - click = "abc()" >
  < ng - avatar string = "{{source.name}}"
round - shape = "true"
auto - color = "true" > < /ng-avatar> < div class = "md-list-item-text"
style = "padding-left:10px;" >
  < h3 > {
    { source.name } } < /h3> < p > {
    { source.tags[0] } } < /p> < /div> < /md-list-content> < /md-list-item> < /div>
  <!-- <md-list>
  < md - list - ite
m ng - repeat = "source in nameofsource"
layout = "row" >
  < md - list - content ng - click = "abc()"
s >
  < ng - avatar string = "{{source.name}}"
round - shape = true auto - color = true >
  < /ng-avatar> < h4 flex = ""
flex - offset = "5" > {
    { source.name } } < /h4> < md - divider > < /md-divider> < /md-list-content> -->
  <!--  <md-button class="md-fab md-mini" aria-label="edit">
  < md - icon ui - sref = "datamill.createdatasource({user:source})" > edit < /md-icon> < /md-button> -->
  <!-- </md-list-item> -->
  < /md-list> < /md-content> < /div> < /div> < /div>
