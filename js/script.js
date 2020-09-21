$(document).ready(function(e){
  $("body").on("click", "div.item", function(event){
    console.log(event.target);

    $("#myModal")[0].style.display = "block";
    var path = event.target.src;
    var name = event.target.getAttribute("id");
    path = path.replace("/LowRes", "");
    console.log(path);

    $(".focus-image")[0].src = path;
    $("#textContent").html(bios[name]);
  });
    $("body").on("click", "#myModal, span.close", function(event){
    if (event.target == $("#myModal")[0]) {
      $("#myModal")[0].style.display = "none";
    }
  });
});


var bios = {
  AlisonLantz : "<h4>Alison Lantz</h4><p>I created this print to represent how my perspective of the pandemic changes. Creating this required being in the dark then in the light, both of which I have experienced during the last few months.</p><p>Sometimes I have felt trapped, unable to move in any direction. Is it a web of my own making? Other times I have seen the light at the end of the tunnel and I have been drawn to move in that direction. Then I am able to gain perspective and know how fortunate I am compared to many.</p>",

  AlliciaKeefe : "<h4>Allicia Keefe</h4><h4>The Crossroads of Virus and Race</h4><p>The pandemic of 2020 has me experiencing an added dose of angst when I go out. Am I carrying the virus asymptomatically? Are you? Are we too close? Am I safe?</p><p>It gives me pause to imagine how a person of color likely experiences life. I imagine every interpersonal interaction plagued with wondering: Am I safe with you?</p>",

  BeckyBreshears : "<h4>Becky Breshears</h4><p class='center'>It’s a blue pandemic...</p><p class='center'>A little virus</p><p class='center'>inciting FEAR</p><p class='center'>Sad to lose familiar freedoms</p><p class='center'>Slow to recover…</p><p class='center'>But remember…</p><p class='center'>The sun will come up </p><p class='center'>TOMORROW</p><p class='center'>Close your eyes</p><p class='center'>BREATHE!</p><p class='center'>When you open your eyes </p><p class='center'>It’s a BRAND NEW WORLD!</p>",

  BeverleyCallaway : "<h4>Beverley Callaway</h4><p>I have been fascinated by the concept of freedom and discipline.</p><p>If we had the discipline to do what is necessary to control this plague, then we will enjoy the renewed freedom as our reward.</p>",

  BrendanWills : "<h4>Brendan Wills</h4><p>Everything is controversial when it could have been a simple conversation.</p><p>Believe in yourself, cover your six, and support your community.</p>",

  CarolElliotSmith : "<h4>Carol Elliot Smith</h4><p>This small sketch is a very condensed version of the COVID-19 experience for me. It starts on the bottom right with the crocus coming up in the late winter and progresses into Spring then Summer. At this point in the year, we are at harvest time for the plant world in our climate. Nature has been reassuring to me during the pandemic because it has stayed the same for the most part. Of course, there is also climate change happening though. The outcome of the effects of the pandemic is still to come and since it is unprecedented in our time, until there is a remedy there is a big question mark in our world.</p>",

  CarolLeonard : "<h4>Carol Leonard</h4><h4>The Human Struggle</h4><p>Some of us struggle with relationships,  jobs, finances, old age, health problems, self-esteem, weight, and every day concerns. Now, we have a new struggle, \"The Invisible Enemy-COVID\". However, it seems eclipsed by the\" Racial-Tension Struggle\", Our Nation finds itself struggling against during this Pandemic.  Now we must all struggle to find the way toward Peace.</p>",

  CarrieApplegate : "<h4>Carrie Applegate</h4><p>I wanted to show the chaos, danger, hazards, and risks going on outside while the safest spot is at home. As someone who lives alone, I know that home where I can touch surfaces. I don’t need to wear a mask, and the only danger is filling the time. I have always enjoyed my home, but during COVID-19 It literally became my sanctuary from the world.</p>",

  ChristinaHofman : "<h4>Christina Hoffman</h4><p>This pandemic had been one of the most alarming, yet full of concentrating on “growth” artistically, that I’ve ever experienced. All I wanted to do was paint flowers with a lot of color and mark-making. I  think I knew it was something I could both “give” to others and myself.</p>",

  ChristineBarmes : "<h4>Christine Barmes</h4><p>I found inspiration from the Statue of Liberty. On of the artists, Auguste Bartholdi was inspired by Egyptian and African models, but he and Edward Laboulaue opted to deliver a statue with more of a Greecian look. I tried to incorporate those influences into my rendition.</p><p>I also attempted to capture the dichotomy of wearing a mask and people’s fears of losing their free speech. My hope is that people will see that the maks is stating the obvious “COVID-19 is non-discriminatory. As an American and as part of the human race, I choose to wear this mask so that I can keep you and myself safe. In doing so I ensure that we can live with dignity and liberty.</p>",

  CindiWalton : "<h4>Cindi Walton</h4><p>When lock-down began, I made a ling list of everything I was going to accomplish. With nothing on the calendar and all the art supplies I needed -- I was going to be productive.</p><p>I discovered pandemics take energy. I sat in my chair and looked out the window.</p><p>As time went on I learned to Zoom for COVID Cocktail parties, yoga classes, and guitar lessons. I talked to my sisters every day. I cooked new recipes for my husband and I. But, most of the time I sat in my chair.</p><p>That list-- I have no idea where it is.</p>",

  CindyHartley : "<h4>Cindy Hartley</h4><p>Like so many others during this most novel year, I am experiencing fear, anxiety, loneliness, grief, and am struggling to keep hope alive. But the most constant feeling is that I am floating in this strange time bubble where nothing happens, yet incredible changes occur at the same time all in the outside world. I am just watching and waiting as time speeds by.</p>",

  DaveDarraugh : "<h4>Dave Darraugh</h4><p class='center'>B R E A T H E</p>",

  DianeBRice : "<h4>Diane B. Rice</h4><p>At times anxious, stressed, quiet, contemplative, sad, defeated, aware of smaller joys, limited smiles, deeper laughter, slowing, simplifying, separations and safety. Holding tragedies with nature emptying the plant of the human species, just not as fast as we are of our planet’s wild species and ecosystems.</p><p>My artist’s soul has become silent at times, lower energy. I listen to music to create calm in the chaos but don’t play music myself in 2020. I connect with the part of my childhood when I played alone and time stopped having meaning. I am trying not to become too disconnected from playful treasurers.</p>",

  ErinSweeney : "<h4>Erin Sweeney</h4><h4>A Touchy Subject</h4><p>I’ve been a bit touchy lately and I can’t put my finger on it. Maybe it’s the fear of being touched by sickness or unemployment again or it might be the frustration of being out of touch with technology as I support my son’s online learning. Perhaps it’s the sadness of listening to a touching tribute to a man gone too soon, or the hope I feel as I witness the ways he touched so many student’s lives. It could be the feeling of connection while keeping in touch with a dear friend-- as a cook, she has just the right touch. Or is it the disgust and horror of watching men abuse power to act as though they are untouchable. Potentially it is the desire to hug my friend as she tells me she hasn’t been physically touched in 162 days. Is it the shame for touching my face sometimes?</p><p>I don’t know -- I think I am losing my touch.</p>",

  EvelynEggabraaten : "<h4>Evelyn Eggabraaten</h4><h5>Age: 9</h5><p>I drew two hands reaching out to each other but not touching because I feel separated from my friends and family. The heart represents the people of Idaho who are both doing fine or maybe even consider COVID and improvement because a family member gets to work from home and the cracks are for the people who are mourning over the loss of a family member or friend. The flowers stand for my family and the family of others. Our family is the flower in the middle which is the happiest one. We have suffered no losses and my father gets to work from home whereas other families have suffered losses and are not as lucky as me.</p>",

  GaryMcCall : "<h4>Gary McCall</h4><p>For five (5) months we have all lived with this pandemic in blue-- wondering when this will stop. Today one of my family shared that he tested positive for COVID, thank goodness he did. Someone’s life may be saved. Love your families, be safe, wear a mask.</p>",

  GregMizuta : "<h4>Greg Mitzuta</h4><h4>Diptych at the intersection of Capitol and Main, July 21, 2020.</h4><p>POV is a fortress on a hill, surrounded by razor wire that shreds science, reason, and philosophical discourse.</p><p>Radioactivity is blaring but only in my head. Two Nikons by my side.</p><p>Across the street, Kevin, arms crossed, eyes roll, turns, and walks away.</p><p>A street preacher elevates and shouts his world.</p><p>Rick parks his bike, captures, posts, and shares his way.</p><p><p>Now playing, “Protect Your Neighbor, Wear A Mask.” But underneath The Egyptian’s marquee most are not playing except the BPD.</p><p>Outside the blue is thick and fluid, is that Lee? The up high knows.</p><p>Inside Jimmy and Lisa veer left but the track runs straight. Can you steer a train? Whitney, did you know that a train engine can fo the same speed in either direction?</p><p>Francis is insightful, MD is face, Andrea is gracious (as always), but Johnog says, “interesting series but his Thunder and Hume are awesome. Are they inside or outside, or ate they on the wire? Definitely not in the back.</p><p>I’m observing, clicking, I can’t close the gap.</p><p>I see writers, poets, dancers, artists, journalists, but you see sticks.</p><p>I see a camera, but you see a flag, or is it the flu?</p><p>POV</p>",

  JaniceStevenorDale : "<h4>Janice Stevenor-Dale</h4><p>Every artist has a blue period, but the tech, digital, global tectonic shift that was volcanized by COVID 19 is not ours. With our cental focus and experiences on workspaces, large scale, we are pivoting to envision future office, creating hybrid spaces where face to face and remote workers meet and hosting webinars on returning to the office with resilience. Agility is everything. Amid this uncertain time of artistic evolution and on a record high setting day we create a solar-powered cyanotype that encourages us to come together and consider both the positive and the negative. Contrast. Blanco-Noir! </p>",

  JenniferHensley : "<h4>Jennifer Hensley</h4><p>The pandemic itself has been a rollercoaster of emotions. Add in politics, unjust murders, racism, socioeconomic issues, and climate change -- It’s overwhelming and my perspective is one of privilege.</p><p>I’m working to meet humans with understanding and love during these highs and lows while pushing for equality and lifting others. It’s the least I can do.</p>",

  JessieSwimeley : "<h4>Jessie Swimeley</h4><p>I love the line and the pattern of an old fence. Its weather-worn wooden posts no longer standing straight. The wires bent by time and one too many cows getting a good scratch.  A fence is a blending of positive and negative space. Barbed wire tells us to stay out, or to not go any further. It protects what is inside its borders and sharply rebukes those who defy it.</p><p>Currently, we are all feeling both the positive and the negative effects of our isolation. The average distance between fenceposts is six to eight feet so they know more about Social (Physical) Distancing than we ever will. We will make it through. We might we a little worn and crooked but, we will be alright.</p>",

  JillStorey : "<h4>Jill Storey</h4><p>Navigating the COVID-19 pandemic had been surreal. All of these tiny virus bombs are floating around us in the air, invisible and --so far-- invincible. Best way to avoid them? Cover your mouth and nose. Don’t cough or sneeze or breathe! Enclose yourself in your own personal bubble and maybe, just maybe, you can make it through the minefield.</p>",

  KatherineShaughnsey : "<h4>Katherine Shaughnessy</h4><p>It’s no surprise that centuries of racial injustice have brought to the surface so much anger and frustration. What’s boiling over today has been brewing for too long. I see the thread of history like rivers and vascular systems. There is a natural flow to both, but when interrupted by the like of a dam, a levy, a clot, or an aneurysm, destruction is sure to follow. Racism is, and always has been, an enormous roadblock to natural growth and human development. The time is long overdue to end racial injustice and let all humans, but especially Black, Indigenous, and People of Color to fully experience peace and justice. BLACK LIVES MATTER.</p>",

  KerryFitch : "<h4>Keri Fitch</h4><h4>The Kitchen View During COVID</h4><p>My normal morning coffee the past years had been in the car. This has been an opportunity to slow down and watch the backyard. But the birds can come and go as they please while I am behind the lace curtains. SIP</p>",

  KimWarren1 : "<h4>Kim Warren</h4><p>Mask Making emerges as my default activity when pandemic anxiety rears up. I’ve sewn so much I barely notice my sewing tools -- their sculptural silhouettes, the chaotic patterns they can spawn en masse. Most are sharp objects capable of cutting, stabbing, dividing: sharp teeth, not edges tiny daggers lurking in the corners. And yet, in cutting, scissors create shapes that may be reassembled. Pins provide a temporary bond. For half a year, life has unspooled erratically from the center of what once felt familiar like a coil of wire, spring-loaded or a mess of thread-- the filament that holds masks and garments, ideas and conversations sometimes even wounds together. It is light and elegant, thin, and fragile but also multi-stranded and strong.</p>",

  KimWarren2 : "<h4>Kim Warren</h4><p>I’ve seen Northern Lights, but I’ve never seen fireflies. I don’t believe in bucket lists. If I had one “Seeing Fireflies” would be on it. Mortality is heckling from the wings lately, too loudly to ignore. </p><p>Time warped this year, distorted rungs of a calendar bunched up like doppler waves- pressed together and extended.</p><p>We remain captive, after a fashion, in homes and cars, alone or crowded or companioned, in the places we were caught when lockdown descended. Even with the lightening restrictions, I still feel bound to place, my radius diminished. </p><p>I like imagining waves of unspent light and energy for living, bottled up and building luminosity toward reunion with an open world.</p>",

  MarnieElmore : "<h4>Marne Elmore</h4><p>I’m not entirely sure how I’m feeling. It changes and fluctuates minute by minute and day by day. This is a sketchy attempt at some sort of open palm, cup-be-full optimism. I haven’t drawn in a while and this is causing me to feel a sense of gratefulness for the ability to use my hands.</p>",

  MaryGardiner : "<h4>Mary Gardiner</h4><p>During COVID-19 I painted most days. Feelings of fear, and worry of “Black Lives Matter” injustices surfaced for me and all my loved ones and the world as a whole. Flowers are my solace. Here, wild columbines represent what it means to be a survivor-- we will survive and thrive.</p>",

  MaryArnold1 : "<h4>Mary Arnold</h4><p>I am Mary Arnold, a local Boise portrait and landscape artist. In love with animals from a young age, I am driven to paint the personality and symbolism of animals in a way that captures their nobility, essence and meaning to me. This community art project seated in the events of 2020 made me think of birds and what they symbolize. Their innate characteristics of observance and ability to fly are strong symbols to me during this era.  We need to look more, think more expansively and let our spirits fly even if we are staying in our homes during this era.</p>",

  MaryArnold2 : "<h4>Mary Arnold</h4><p>I am Mary Arnold, a local Boise portrait and landscape artist. In love with animals from a young age, I am driven to paint the personality and symbolism of animals in a way that captures their nobility, essence and meaning to me. This community art project seated in the events of 2020 made me think of birds and what they symbolize. Their innate characteristics of observance and ability to fly are strong symbols to me during this era.  We need to look more, think more expansively and let our spirits fly even if we are staying in our homes during this era.</p>",

  MeganMizuta : "<h4>Megan Mizuta</h4><p>I’ve avoided Twitter for years but, I finally gave in so that I could see what was happening with the Portland protests. Around the same time, I found a stray cat and I took her to the shelter. They named her “Joy”.  I spent the next month glued to my phone-- checking protest coverage and checking the shelter site to see if joy was up for adoption yet. </p><p>I brought Joy home at the end of July 2020. Since then she has frequently interrupted my “doomsday” scrolling.</p>",

  MollyDevinaspre : "<h4>Molly Devinaspre</h4><p>In this piece, I layered images from my garden with images of my family. Given current events it seems only fitting to make art full of layers, both literal and symbolic.  </p><p>My husband works with Covid-19 patients. I included a photo of him in all the layers he puts on at work. We have never been the types to worry excessively about germs and this pandemic made us really consider how and if we could spend time with friends and family. My son had his birthday this summer.  With so many people around us sick or quarantined, he did not have a typical party. I included a photo of him on his birthday He was wearing a mask because family dropped by to wish him a Happy Birthday.  The self-portrait in this piece I took on the last day I worked. I was unloading a kiln filled with my student’s art. I have never had to wear a mask to unload ceramics and this added a new layer to how serious the pandemic was becoming. </p><p>I find it so easy to focus on the negative during this pandemic. There is so much sadness and isolation that I have felt.  I am actively looking to see the positive that has come during this time. My son is always excited to go on adventures or play. I am lucky to see the joy he has in his eyes. I see many people caring for their community and I see people finding strength to make the changes we so desperately need in our country and world.  </p><p>Cosmos flowers can symbolize harmony, peace, and wholeness. I included these flowers in my work as they have helped me find peace amidst the chaos that has been this spring and summer. My garden filled with cosmos and sunflowers has brought glimmers of peace, and much needed respite in this difficult time.</p>",

  NikkiRusso : "<h4>Nikki Russo</h4><p>This pandemic has had a moderate impact on my personal, daily life. Having said that, the response from our society, affected me the most, and has been quite an eye-opener.  I have recognized the utmost in kindness in people, and also, how cruel and unglued humans can be when faced with desperation and uncertainty. It has also shown mehow small this world really is, how very connected we all are, and how important it is to band together for the greater good no matter where you come from, or what your background is.</p><p>I know ultimately, we will all get through this, (God help us all!) and although it's uncomfortable and unsettling, I have personally found ease in adapting quickly to this change of environment and energy and I am grateful for that.  The Yogi figure meditating represents my ability to go within and understand that I do not have control over what happens, but only how I react to it. </p><p>I consider myself an extrovert, but during this time, I have taken advantage of being a home-body and have become much more of a recluse. The man shown sitting on the chair, holding his face, represents the \"isolation\" in this piece, and the stress and loneliness that it can bring, but also, at times, a welcomed gift of solitude. The clarity that has come from this time, has me personally questioning our current paradigm and has made it clear to me, that our status quo and how we exist on our planet, is not working in our favor, nor is it sustainable. </p><p>We all know that major changes and shifts are needed to bring this planet back into balance and I am hopeful that this will come to fruition one day.</p><p>Time seems elastic right now due to the shifts, time alone, breaks from routine and in my piece, the clock represents time speeding up for me. I feel that I have had a moment to actually pay attentionto the time and realize how precious it is. I have come to value my time and with whom and how I enjoy it, more so now, than ever before. </p><p>The television in this piece, represents world events, (including the pandemic), and how news is delivered to us these days.  I have grown to distrust the source and integrity of the news being shared. I am hopeful that when faced with future challenges, we will rise up against dishonesty and agendas that don't have our best interests at hand.  I am hopeful for a prosperous, healthy, and harmonious future, one in which we may all prosper and the dark shade that is blocking the light will be lifted. </p><p>Mother Earth is also represented, as a full-figured beauty. She is filled up to capacity, weeps for mankind, but is also full of hope for humanity.</p>",

  NissaNagel : "<h4>Nissa Nagel</h4><p>As isolation, despair and anxiety have become fast friends, I find solace in tending to my kitchen garden, joy watching it thrive and harvesting its sustenance. In my kitchen, preoccupied with conserving resources, I find respite in preparing the bounty and sharing its abundance. Connection has come from my neighbors doing the same. Listlessness combated with love sewn masks mailed all around the country with heartfelt wishes of health and comfort. The screen, normally detested, has become my lifeline, whether Friday night Zoom Meetings with my girlfriends discussing our and our nation’s state of affairs or finding solidarity through streaming Facebook Memorials and protests on Youtube.</p>",

  PatrickSweeney : "<h4>Patrick Sweeney</h4><p class='center'>Twenty Twenty</p><p class='center'>Positives & Negatives</p><p class='center'>Ups & Downs</p><p class='center'>Highs & Lows</p><p class='center'>Ebbs & Flows</p><p class='center'>Are we coming or going?</p><p class='center'>Maybe Twenty Twenty-One knows</p>",

  SadiMosko : "<h4>Sadi Mosko</h4><p>The pandemic had exposed many cracks in our society: ineffective healthcare, systemic racism, lack of resilience to crises. It is awful that so many had to die for these cracks to be exposed, but they are necessary conversations. I wish it did not have to happen in this way, but I am also grateful for all of the discussions and reckonings that this pandemic has forced upon us.</p>",

  SandraCrespo : "<h4>Sandra Crespo</h4><p>2020 has been a hard year for all of us. However, we are lucky to live in a city in which the outdoors is huge. Yes, we sacrificed our spring and summer to protect the most susceptible member of our community, but we also had the greenbelt, hiking trails, and the rose garden. </p><p>I visited the last one everyday as part of my 30 minutes out of quarantine. I saw roses bloom and I felt grateful for witnessing it.</p>",

  SurgesPoplov : "<h4>Surges-Prokop</h4><p>The Pandemic in Blue Project gave me a chance to think about reversals or mirror images. Rather than drawing on the acetate film I chose to use a cut out that I place over the cyanotype fabric. This process was in keeping with the linocut printmaking process which is an interest of mine. </p><p>To speak to them of the project: our current climate of significant social unrest in the midst of a health crisis is challenging everyone. We find ourselves without a “playbook” with steps to follow. Therefore we are required to use problem-solving and creativity-- in real time!</p><p>To be honest I didn’t read the steps to this project. Processes that I relied on in the past don’t seem to work and this project was an extension navigating each day with creative problemsolving. While I’m not thrilled that the image is positioned horizontally rather than vertically (due to not reading directions). It just so happens to represent the world being turned on its side -- yet the moon rises every night.</p>",

  SuzanneKnorr : "<h4>Suzanne Knorr</h4><h4>Futile Efforts</h4><p>Ever been in that frustrating place? “Theirs is not to reason why…” So you do your best and you strive to comply, only to learn that all you do matters not at all. Finding myself in that coronavirus place questioning... “Theirs is but to do or die”</p>",

  TimFearnside : "<h4>Tim Fearnside</h4><p>This is a critical moment. Not just in American history, but in world history. Democracy is under assault, both in the U.S. and abroad. The weaponry is familiar: fearmongering, scapegoating, misinformation, conspiracy theories, propaganda, lies, racial and class division, demonization of political opponents, of science, of journalism and truth.</p><p>There’s no point in sugarcoating it. This piece isn’t subtle. It’s about trying to maintain hope in a world and nation teetering on the edge of darkness.</p>",

  TrishMizuta : "<h4>Trish Mitzuta</h4><p>August finds me preparing to return to school for my 25th year of teaching. It will be a school year like no other. Masks, physical distancing, and sanitation will be interesting with 21 second graders. We will adapt and make it work, one day at a time.</p>"
};
