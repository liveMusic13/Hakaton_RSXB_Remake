let data = [
	{
		choice1: {
			id: '1',
			text: 'Встать и начать день.',
			color: 'url(../public/scen_1.png)',
			consequence:
				'Проснувшийся, Вы протянулись в постели, пытаясь отогнать остатки сна. Вас охватывает чувство свежести и новизны нового дня. Несмотря на непреодолимое желание поддаться соблазну и остаться в теплой постели, Вы решительно встаете и начинаете свой день.',
		},
		choice2: {
			id: '2',
			text: 'Пожаловаться на тяжесть фермерской жизни.',
			color: 'url(./scen_1.png)',
			consequence: [
				'Пробуждение пришло с осознанием трудностей впереди. Жизнь фермера это не только живописные пейзажи и свежий воздух, это еще и бесконечные часы тяжелого труда. Kак только Вы встаете из постели,',
				'Ваше тело напоминает о бесчисленных ссадинах, ушибах и усталых мышцах от вчерашнего дня. Но, как и все фермеры, Вы знаете, что надо не сдаваться. Итак, с вздохом, Вы начинаете очередной день, полный тяжелой работы на Вашем поле.',
			],
		},
		choice3: {
			id: '3',
			text: 'Подождать минуту, насладиться видом из окна еще немного.',
			color: 'url(./scen_1.png)',
			consequence: [
				'Пробуждение было приятным и спокойным. Прежде чем встать и начать Ваш тяжелый день, Вы решили на мгновение задержаться в теплой постели и насладиться видом из окна. Взгляд скользит по изумрудному виду Ваших полей, где пшеница колышется под ветром, как танцующее море.',
				'Солнце поднимается над горизонтом, распуская розовые и золотые ленты по небу. На миг все кажется таким спокойным и безмятежным. Это вид - одна из немногих радостей фермерской жизни, которую Вы цените каждый день.',
			],
		},
	},

	{
		choice1: {
			id: '1',
			text: 'Поблагодарить робота и приступить к еде.',
			color: 'url(./scena_2-zas.png)',
			consequence: [
				'Вы улыбнулись роботу, кивнув головой и произнеся: “Спасибо”. Затем вы снова уделили внимание своему завтраку, который был так аппетитно подан.',
				'Это была простая, но питательная еда, идеально подходящая для тяжелого дня на ферме.  Довольные, Вы принялись за еду, наслаждаясь каждым куском.',
			],
		},
		choice2: {
			id: '2',
			text: 'Проверить, что робот приготовил на завтрак.',
			color: 'url(./scena_2-zas.png)',
			consequence: [
				'Прежде чем приступить к завтраку, Вы решили проверить, что робот приготовил на завтрак. Он обычно делает все идеально, но Вам всегда интересно узнать, какие блюда он выбрал сегодня.',
				'Вы заглянули в тарелку и увидели, что робот приготовил свежие яйца, бекон и авокадо. От одного вида уже становится вкусно, и Вы с нетерпением ждете начала трапезы.',
			],
		},
		choice3: {
			id: '3',
			text: 'Направиться в сарай к машинам, пропустив завтрак.',
			color: 'url(./scena_2-vyb3.png)',
			consequence: [
				'Внезапно Вы поняли, что у Вас просто нет аппетита. И хотя робот хорошо приготовил завтрак, Вам больше хотелось побыть одному и пройтись по собственному участку.',
				'Постепенно Вы поднялись из-за стола и направились быстро к сараю,где стояли Ваши машины. Был важен каждый момент тишины перед началом длительного рабочего дня.',
			],
		},
	},

	{
		choice1: {
			id: '1',
			text: 'Провести обслуживание и диагностику роботов.',
			color: 'url(./scena_3-zas.png)',
			consequence: [
				'Начиная работу на поле, Вы решили начать с диагностики и технического обслуживания роботов. Эти машины являются неотъемлемой частью Вашей фермы, и важно удостовериться, что они работают без сбоев. Проведя проверку, ',
				'услышав знакомый гул моторов и увидев ясные данные на дисплее, Вы удовлетворенно кивнули. Все было в порядке, и Вы готовы приступить к работе.',
			],
		},
		choice2: {
			id: '2',
			text: 'Помочь роботам и посадить новый урожай.',
			color: 'url(./scena_3-ambar-2.png)',
			consequence: [
				'Работа на поле вместе с роботами была непростой, но душевной процедурой. Обрабатывая землю и сажая новый урожай, Вы почувствовали умиротворение и своеобразную радость, которую мог подарить только труд на свежем воздухе.',
				'Роботы, являясь почти продолжением Вашего тела, аккуратно выполняли свою работу, показывая замечательные результатф. И вот, после нескольких часов тяжелого труда, вы заметили, что новый урожай был успешно посажен и готов к росту.',
			],
		},
		choice3: {
			id: '3',
			text: 'Сперва заняться другими делами (упростить работу роботов с помощью ИТ).',
			color: 'url(./scena_3-ambar-2.png)',
			consequence: [
				'Прежде чем приступить к непосредственной работе на поле, Вы решили сосредоточиться на том, чтобы упростить работу роботов с помощью ИТ. Сначала Вы обновили программное обеспечение и устранили некоторые баги, которые могли помешать их работе.',
				'Затем Вы разработали новый алгоритм, который оптимизировал их работу, делая ее более эффективной. После такой подготовки роботы были готовы работать с максимальной производительностью, что позволило Вам сэкономить время и силы на поле.',
			],
		},
	},
	{
		choice1: {
			id: '1',
			text: 'Начать установку и настройку оборудования.',
			color: 'url(./scena_4-vyb3.png)',
			consequence: [
				'Окончив работу на поле, Вы переключились на другие важные дела на ферме. Первым делом Вы решили начать устанавливать и настраивать новое оборудование. Вы тщательно прочитали инструкцию и последовательно выполняли каждый шаг, чтобы убедиться, что все установлено и настроено правильно.',
				'Вы порой обожаете этот процесс, хотя и требующий внимания, потому что знаете, что каждое новшество на Вашей ферме - это шаг вперед, это прогресс, который помогает Вам стать еще лучше.',
			],
		},
		choice2: {
			id: '2',
			text: 'Взять день отдыха и ничего не делать.',
			color: 'url(./scena-4-zas.png)',
			consequence: [
				'Между всеми этими делами на ферме, Вы решили сделать что-то невероятное - устроить себе день отдыха. Вы редко позволяете себе такую роскошь, но тогда Вы почувствовали, что действительно нуждаетесь в ней. Так что Вы просто отложили все свои дела,',
				'поставили роботов на автономный режим работы и провели весь день отдыхая и не делая вообще ничего. Вы просто наблюдали за небом, читали книги и наслаждались спокойствием. Это был действительно замечательный день, полный редкого для Вас, но жизненно важного отдыха.',
			],
		},
		choice3: {
			id: '3',
			text: 'Рассмотреть ферму и обдумать план по ее модернизации.',
			color: 'url(./scena-4-zas.png)',
			consequence: [
				'Пройдясь по ферме и вдохнув свежий, чистый воздух, Вы начали внимательно рассматривать Ваш участок. У Вас было множество идей по дальнейшей модернизации и оптимизации работы: от установки новых автоматизированных систем до внедрения более эффективных методов обработки почвы.',
				'Размышляя о новых возможностях, которые открывались перед Вами, Вы почувствовали возрастающий энтузиазм и нестерпимое желание воплотить Ваши идеи в реальность.',
			],
		},
	},
	{
		choice1: {
			id: '1',
			text: 'Начать установку и настройку оборудования.',
			color: 'url(./scena_4-vyb3.png)',
			consequence: [
				'С наступлением вечера, после всего того, что Вы успели сделать за день, Вы решили приступить к установке и настройке нового оборудования. Это было важное и волнительное занятие. Каждый прогресс в технологии добавлял трудностей, ',
				'но также открывал новые возможности для усовершенствования Вашей фермы. Вы провели некоторое время, изучая мануалы, экспериментировали с настройками, всё, чтобы оборудование работало безотказно.',
			],
		},
		choice2: {
			id: '2',
			text: 'Взять день отдыха и ничего не делать.',
			color: 'url(./scena_5-vyb-2.png)',
			consequence: [
				'Когда наступил вечер, Вы решили, что пора дать себе небольшой перерыв от работы на ферме и провести вечер в покое, не делая вообще ничего. Вы занимались простыми вещами, которые приносили Вам удовольствие - читали книгу,',
				'смотрели вечерний закат или просто сидел на пороге своего дома, слушая звуки ночи. Такой отдых был важен для восстановления энергии и получения новой порции вдохновения для дальнейшей работы на ферме.',
			],
		},
		choice3: {
			id: '3',
			text: 'Рассмотреть ферму и обдумать план по ее модернизации.',
			color: 'url(./scena_4-vyb3.png)',
			consequence: [
				'Вечер был идеальным временем для обдумывания планов по модернизации фермы. Под светом звёзд Вы сидели и размышляли об усовершенствованиях, которые хотели внести. Новое оборудование, более эффективная система полива,',
				'улучшенные роботы - каждая идея звучала привлекательно. Всё это хотелось внедрить как можно скорее, все эти возможности светились на горизонте Ваших мечтаний, создавая в Вашем воображении картину идеальной фермы будущего.',
			],
		},
	},
	{
		introStep:
			'Фермер просыпается от звонка будильника на своем спартано-обставленном фермерском доме. Вид из окна открывает величественный простор полей, которые требуют ухода и тяжелого труда.',
	},
	{
		intro13: 'url(./glav-rob.png)',
		intro2: 'url(./glav-rob2.png)',
	},
];

export default data;
