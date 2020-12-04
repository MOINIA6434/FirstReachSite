import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <div className='container'>
      <Router>
        <div>
          <nav>
            <ul>
              <li><p>
                <Link to="/one">Робеспьер</Link>
              </p></li>
              <li>
                <Link to="/two">Кромвель</Link>
              </li>
              <li>
                <Link to="/three">Ленин</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact={true} path="/one" render={() => (
              <h3> Робеспьер. Одной из самых ярких и кровавых революций в истории стала Великая Французская. Но если Марат подготовил почву для массового террора, то осуществлял его уже Робеспьер. Память о нем настолько кровавая, что этому человеку так и не поставили памятников, его именем не называли улиц и городов. А ведь в 27 лет он страстно агитировал за отмену смертной казни, а через 8 лет утверждал, что казнь является обязанностью любого революционного правительства. В начале карьеры Робеспьер защищал права народа, а в конце жизни обособился от него. Строгий законник окончательно дискредитировал судопроизводство. Революционер-патриот превратился в итоге в тирана. А появился на свет Максимильен де Робеспьер в 1758 году. Семья его была небедной, в Арасско колледже мальчик проявил себя прилежным учеником, получив стипению для обучения в Париже. Там Робеспьер продолжил отличное обучение и увлекся идеями Руссо, особенно его политической теорией. В 1781 году молодой человек стал адвокатом в Парижской парламенте, но из-за бедности был вынужден покинуть столицу. В провинции он смог наладить спокойную и обемпеченную жизнь. Руководствуясь принципами свободы и права на жизнь, адвокат защищал в суде даже бедняков, делая это бесплатно. А в 1789 году Робеспьер стал депутатом Генеральных штатов от третьего сословя, провозошласивших себя вскоре Национальным и Учредительным собранием. В самом начале революции, в момент захвата Парижа и Бастилии, провинциальный адвокат выжидал. Зато когда стали образовываться политические клубы, Робеспьер проявил себя вовсю. Он стал завсегдатаем Якобинского клуба, который требовал продолжения революции, а не сохранения монархии в обновленной конституционной форме. В 1792 году в Париже прошло очередное восстание, которое сделало Робеспьера одним из вождей революции, наряду с Дантоном и Маратом. Вскоре былые друзья стали мешать амбициозному политику. И вот Дантон был отовдинут на второй план, а Марата убили. Ничто не могло помешать террору, который развернул Робеспьер. В тюрьмах Парижа уже не хватало мест, обвиняемые в преступлениях против государства лишались права защиты. Палачи казнили по 50 человек за раз, а после казни Марии-Антуанетты гильотина переставала работать только ночью. Весной 1794 года террор обратился против политических конкурентов Робеспьера. Был казнен даже Дантон. Сам Робеспьер навязал Конвенту новый закон, который ликвидировал суд и неприкосновенность депутатов. Страх сплотил депутатов и 27 июля 1794 года Робеспьера обвинили в тирании, тут же арестовали, а вскоре и казнили. </h3>
            )}/>
            <Route exact={true} path="/two" render={() => (
              <h3> Кромвель. Это довольно противоречивая личность в истории. Одни считали его героем и посвящали ему поэмы, а другие прямо называют его злодеем, обильно проливавшим кровь англичан. Родился знаменитый революционер в 1599 году. О его молодости известно мало - он бросил учебу, чтобы обеспечивать семью. До 1640 года Кромвель являлся обычным мировым судьей и боролся с правительством за права общин, с духовенством за право свободно толковать Библию. Никто и не предполагал, что "деревенскому дворянину" суждено будет возглавить борьбу против деспотизма короля. В 1640 году обострились противоречия короля Карла I и Парламента. Через два года монарх объявил войну своему законодательному органу. Тогда Кромвель приступил к формированию собственной кавалерии, ведь без нее парламент не мог победить. В этой армии офицерами могли стать обычные простолюдины. Кавалерия стала основой нового войска, а сам Кромвель стал генерал-лейтенантом. Парламент разбил роялистов, а Карл I попал в плен. При активном участии Кромвеля революционный суд признал монарха тираном и казнил его в 1645 году. В последующие годы Кромвель узурпировал власть в стране, жестко подавив востания в Ирландии и Шотландии. Разогнав в 1653 году революционер превратился в диктатора, лорда-протектората всей Англии. Уставшее от революций населений не поддержало реформ Кромвеля, сам он остался в одиночестве, отвергнутый друзьями. Страсть и смелость сменились раздражительностью и подозрительностью. Умер великий революционер в 1658 году. </h3>
            )}/>
            <Route exact={true} path="/three" render={() => (
              <h3> Владимир Ильич Ульянов, больше известный по основному псевдониму Ленин, создал первое в мире социалистическое государство и российскую социал-демократическую партию большевиков. Революционер, приверженец теории марксизма, политический деятель, идейный вдохновитель Октябрьской революции.

              В Советском Союзе он стал объектом культа и преклонения. Он был возвеличен, прославлен и идеализирован. Его знали как гиганта мысли, провидца, гения. Но на сегодняшний день Владимир Ленин вызывает противоречивые чувства. Одни по-прежнему считают его крупнейшим политическим теоретиком, который изменил мировую историю, другие видят в нем автора жестких концепций, способствовавших развалу экономических устоев страны и уничтожению собственного народа. </h3>
            )}/>
          </Switch>
        </div>
      </Router>
      <div className='Information'>
          <h3>Автор проекта: Егор Полуэктов</h3>
      </div>
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
      ↑
      </button>
      </div>
  );
}
