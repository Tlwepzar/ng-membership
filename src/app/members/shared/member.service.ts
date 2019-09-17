import { Injectable } from '@angular/core'
import { Subject, Observable } from 'rxjs'
import { IMember } from './member.model';

@Injectable()
export class MemberService {
  member: IMember;
  getMembers() :Observable<IMember[]> {
    let subject = new Subject<IMember[]>()
    setTimeout(() => {subject.next(MEMBERS); subject.complete(); },100)
    return subject
  }

  getMember(id: number):IMember {
    return MEMBERS.find(members => members.id === id)
  }

  saveMember(member) {
    member.id = 1001
    member.beneficiary =[]
    MEMBERS.push(member)
  }

  updateMember(member) {
    let index = MEMBERS.findIndex(x  => x.id = member.id)
    MEMBERS[index] = member
  }
}

const MEMBERS:IMember[] =  [
    {
        id: 1,
        name: 'Tshepang',
        surname: 'Molefe',
        memberNo: 'MTE019080',
        identityNo: 9112263155080,
        date: new Date('6/26/2020 16:32:01'),
        imageUrl: '/assets/images/profile1.png',
        location: {
            address: '54329 Gugulethu Scheme,',
            city: 'Kwa-Thema', 
            zipCode: 1575,
            province: 'Gauteng',
            country: 'South Africa',
        },
        status:'active',
        beneficiary: [
        {
          id: 1,
          name: "Gomolemo",
          surname: "Molefe",
          identityNo: 130418077900,
          relationship: "child"
        },
        {
          id: 2,
          name: "Patience",
          surname: "Molefe",
          identityNo: 121290418077900,
          relationship: "parent"
        },
        {
          id: 3,
          name: "Jacob",
          surname: "Molefe",
          identityNo: 150490418900,
          relationship: "parent",
        },
        {
          id: 4,
          name: "Sihle",
          surname: "Molefe",
          identityNo: 121290418077900,
          relationship: "sibling"
        }
      ]
    },
    {
      id: 2,
      name: 'Hlanganani',
      surname: 'Shibambo',
      memberNo: 'MTE022010',
      identityNo: 8906223155080,
      date: new Date('4/15/2037'),
      imageUrl: '/assets/images/user-icon.png',
      onlineUrl: 'https://lastown.io/members/',
      status:'active',
      beneficiary: [
      {
        id: 1,
        name: "Katekani",
        surname: "Shibambo",
        identityNo: 130418077900,
        relationship: "child"
      }
      ]
    },
    {
      id: 3,
      name: 'Abednego',
      surname: 'Mdluli',
      memberNo: 'MTE0454340',
      identityNo: 7111133665080,
      date: new Date('5/4/2037'),
      imageUrl: '/assets/images/user-icon.png',
      location: {
        address: 'Plot 105, Emfekayi',
        city: 'eMhlathuze',
        zipCode: 3005,
        province: 'KwaZulu Natal',
        country: 'South Africa'
      },
      status:'Inactive',
      beneficiary: [
      {
        id: 1,
        name: "Khula",
        surname: "Mdluli",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id:2,
        name: "Mbali",
        surname: "Mdluli",
        identityNo: 8762876877900,
        relationship: "child"
      },
      ]
    },
    {
      id: 4,
      name: 'Brian',
      surname: 'Mowkena',
      memberNo: 'MTE0543190',
      identityNo: 8606253155080,
      date: new Date('6/10/2037'),
      imageUrl: '/assets/images/user-icon.png',
      location: {
        address: '2087 Mntane Str',
        city: 'Duduza',
        zipCode: 2005,
        province: 'Gauteng',
        country: 'South Africa'
      },
      status:'active',
      beneficiary: [
      {
        id: 1,
        name: "Vhulamfo",
        surname: "Mowkena",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id:2,
        name: "Nlovukazi",
        surname: "Mowkena",
        identityNo: 8762876877900,
        relationship: "child"
      },{
        id: 3,
        name: "Sipho",
        surname: "Mowkena",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id:4,
        name: "Tshepo",
        surname: "Mowkena",
        identityNo: 8762876877900,
        relationship: "child"
      },
      ]
    },
    {
      id: 5,
      name: 'Lebo',
      surname: 'Merahe',
      memberNo: 'MTE880298',
      identityNo: 8802189144080,
      date: new Date('2/10/2037'),
      imageUrl: '/assets/images/user-icon.png',
      location: {
        address: '876 Setlareng Str',
        city: 'Mahikeng',
        zipCode: 7005,
        province: 'North West',
        country: 'South Africa'
      },
      status:'active',
      beneficiary: [
      {
        id: 1,
        name: "Mpho",
        surname: "Merahe",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id: 2,
        name: "Moeti",
        surname: "Merahe",
        identityNo: 8565757227900,
        relationship: "child"
      },{
        id: 3,
        name: "Boiti",
        surname: "Merahe",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id: 4,
        name: "Tshepo",
        surname: "Merahe",
        identityNo: 8762876877900,
        relationship: "child"
      },
      {
        id: 5,
        name: "Matla",
        surname: "Merahe",
        identityNo: 15141577900,
        relationship: "child"
      },
      {
        id: 6,
        name: "Tshepo",
        surname: "Merahe",
        identityNo: 252787633110,
        relationship: "child"
      },
      ]
    },
    {
      id: 6,
      name: 'Busi',
      surname: 'Nkosi',
      memberNo: 'MTE456789',
      identityNo: 92070822110080,
      date: new Date('6/10/2037'),
      imageUrl: '/assets/images/user-icon.png',
      location: {
        address: '9886 Mjondolo Str',
        city: 'Kwa Thema',
        zipCode: 1575,
        province: 'Gauteng',
        country: 'South Africa'
      },
      status:'active',
      beneficiary: [
      {
        id: 1,
        name: "Jabu",
        surname: "Nkosi",
        identityNo: 130418077900,
        relationship: "child"
      },
      {
        id: 2,
        name: "Vusi",
        surname: "Nkosi",
        identityNo: 8565757227900,
        relationship: "sibiling"
      },{
        id: 3,
        name: "Yoyo",
        surname: "Nkosi",
        identityNo: 130418077900,
        relationship: "parent"
      },
      ]
    }
]